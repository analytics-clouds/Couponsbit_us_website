/**
 * Extracts each store's own FAQ Q&A content (already visible in its
 * _components/StoreCouponsContent.tsx accordion) into structured JSON, using
 * the TypeScript Compiler API rather than regex — the inline `{q, a}` array
 * literal isn't formatted consistently across files (some single-line, some
 * multi-line per item) and some answers contain escaped quotes, so a real
 * AST parse is the only reliable way to read the fully-decoded string text.
 *
 * Also derives each store's `#faq` fragment id from its own page.tsx
 * BreadcrumbList node, so nothing is hardcoded per store.
 *
 * Output is consumed independently by faq-insert.js and faq-verify.js so
 * neither step can silently drift from the other.
 */
const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const baseDir = path.join(__dirname, "..");
const storesDir = path.join(baseDir, "app", "stores");

// The 9 already-done Nuage city sub-pages — confirmed via prior audit work
// to already have correct, live FAQPage schema. Skip extracting/touching them.
const ALREADY_DONE = new Set(
  ["seattle", "san-francisco", "new-york", "miami", "los-angeles", "dallas", "boston", "austin", "atlanta"].map(
    (city) => `nuage-discount-code/${city}`
  )
);

function listStoreSlugs() {
  const slugs = [];
  function walk(dir, relParts) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      if (entry.name === "_components") continue;
      const full = path.join(dir, entry.name);
      const rel = [...relParts, entry.name];
      const contentFile = path.join(full, "_components", "StoreCouponsContent.tsx");
      const pageFile = path.join(full, "page.tsx");
      if (fs.existsSync(contentFile) && fs.existsSync(pageFile)) {
        slugs.push(rel.join("/"));
      }
      // Recurse for nested stores like nuage-discount-code/{city}
      walk(full, rel);
    }
  }
  walk(storesDir, []);
  return slugs;
}

function parseSourceFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const sf = ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  return { sf, text };
}

function findFaqMapArray(sf) {
  let found = null;
  function visit(node) {
    if (found) return;
    if (
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      node.expression.name.text === "map" &&
      ts.isArrayLiteralExpression(node.expression.expression)
    ) {
      const arg = node.arguments[0];
      if (
        arg &&
        (ts.isArrowFunction(arg) || ts.isFunctionExpression(arg)) &&
        arg.parameters.length === 2 &&
        arg.parameters[0].name.getText() === "faq" &&
        arg.parameters[1].name.getText() === "i"
      ) {
        found = node.expression.expression;
        return;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  return found;
}

function extractItems(arrayLiteral) {
  const items = [];
  for (const element of arrayLiteral.elements) {
    if (!ts.isObjectLiteralExpression(element)) return { error: "non-object element in FAQ array" };
    let q = null;
    let a = null;
    for (const prop of element.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const name = prop.name.getText();
      const init = prop.initializer;
      let value = null;
      if (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init)) {
        value = init.text;
      } else if (ts.isTemplateExpression(init)) {
        return { error: "template literal with interpolation — cannot extract statically" };
      } else {
        return { error: `unsupported initializer kind for "${name}": ${ts.SyntaxKind[init.kind]}` };
      }
      if (name === "q") q = value;
      else if (name === "a") a = value;
    }
    if (q === null || a === null) return { error: "missing q or a property" };
    items.push({ q, a });
  }
  return { items };
}

function findBreadcrumbFaqId(pageSf) {
  let faqId = null;
  function visit(node) {
    if (faqId) return;
    if (ts.isObjectLiteralExpression(node)) {
      let isBreadcrumbList = false;
      let idValue = null;
      for (const prop of node.properties) {
        if (!ts.isPropertyAssignment(prop)) continue;
        const name = prop.name.getText().replace(/^["']|["']$/g, "");
        if (name === "@type" && ts.isStringLiteral(prop.initializer) && prop.initializer.text === "BreadcrumbList") {
          isBreadcrumbList = true;
        }
        if (name === "@id" && ts.isStringLiteral(prop.initializer)) {
          idValue = prop.initializer.text;
        }
      }
      if (isBreadcrumbList && idValue) {
        faqId = idValue.replace(/#breadcrumb$/, "#faq");
        return;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(pageSf);
  return faqId;
}

function main() {
  const slugs = listStoreSlugs();
  const results = {};
  const manualReview = {};

  for (const slug of slugs) {
    if (ALREADY_DONE.has(slug)) continue;

    const contentPath = path.join(storesDir, slug, "_components", "StoreCouponsContent.tsx");
    const pagePath = path.join(storesDir, slug, "page.tsx");

    const { sf: contentSf } = parseSourceFile(contentPath);
    const faqArray = findFaqMapArray(contentSf);
    if (!faqArray) {
      manualReview[slug] = "no [{q,a}].map((faq, i) => ...) pattern found";
      continue;
    }

    const { items, error } = extractItems(faqArray);
    if (error) {
      manualReview[slug] = error;
      continue;
    }
    if (!items || items.length === 0) {
      manualReview[slug] = "FAQ array matched but has zero items";
      continue;
    }

    const { sf: pageSf } = parseSourceFile(pagePath);
    const faqId = findBreadcrumbFaqId(pageSf);
    if (!faqId) {
      manualReview[slug] = "no BreadcrumbList @id found in page.tsx to derive #faq id from";
      continue;
    }

    results[slug] = { faqId, items };
  }

  fs.writeFileSync(path.join(__dirname, "faq-extraction.json"), JSON.stringify(results, null, 2));
  fs.writeFileSync(path.join(__dirname, "faq-extraction-errors.json"), JSON.stringify(manualReview, null, 2));

  const counts = Object.values(results).map((r) => r.items.length);
  console.log(`Stores extracted: ${Object.keys(results).length}`);
  console.log(`Stores needing manual review: ${Object.keys(manualReview).length}`);
  if (counts.length) {
    console.log(`Item count range: min=${Math.min(...counts)} max=${Math.max(...counts)}`);
  }
  if (Object.keys(manualReview).length) {
    console.log("\n--- Manual review needed ---");
    for (const [slug, reason] of Object.entries(manualReview)) {
      console.log(`${slug}: ${reason}`);
    }
  }
}

main();
