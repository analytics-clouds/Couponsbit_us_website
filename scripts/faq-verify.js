/**
 * Independently verifies every store's inserted FAQPage schema:
 *  1. Re-parses StoreCouponsContent.tsx fresh (not reusing faq-extraction.json)
 *     to guard against any accidental source mutation.
 *  2. Parses the updated page.tsx's FAQPage.mainEntity via AST.
 *  3. Asserts exact string equality, per store, in order.
 *  4. Cross-store hash-collision check across all stores' Q&A sets, to catch
 *     any copy/paste mixup (e.g. one store's schema containing another's
 *     questions) — the failure mode explicitly flagged for this task.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const ts = require("typescript");

const baseDir = path.join(__dirname, "..");
const storesDir = path.join(baseDir, "app", "stores");

const ALREADY_DONE = new Set(
  ["seattle", "san-francisco", "new-york", "miami", "los-angeles", "dallas", "boston", "austin", "atlanta"].map(
    (city) => `nuage-discount-code/${city}`
  )
);

function parseSourceFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  return ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
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

function extractSourceItems(arrayLiteral) {
  const items = [];
  for (const element of arrayLiteral.elements) {
    if (!ts.isObjectLiteralExpression(element)) return null;
    let q = null;
    let a = null;
    for (const prop of element.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const name = prop.name.getText();
      const init = prop.initializer;
      let value = null;
      if (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init)) value = init.text;
      else return null;
      if (name === "q") q = value;
      else if (name === "a") a = value;
    }
    if (q === null || a === null) return null;
    items.push({ q, a });
  }
  return items;
}

function findFaqPageNode(pageSf) {
  let node = null;
  function visit(n) {
    if (node) return;
    if (ts.isObjectLiteralExpression(n)) {
      let isFaqPage = false;
      let faqId = null;
      let mainEntityArray = null;
      for (const prop of n.properties) {
        if (!ts.isPropertyAssignment(prop)) continue;
        const name = prop.name.getText().replace(/^["']|["']$/g, "");
        if (name === "@type" && ts.isStringLiteral(prop.initializer) && prop.initializer.text === "FAQPage") {
          isFaqPage = true;
        }
        if (name === "@id" && ts.isStringLiteral(prop.initializer)) {
          faqId = prop.initializer.text;
        }
        if (name === "mainEntity" && ts.isArrayLiteralExpression(prop.initializer)) {
          mainEntityArray = prop.initializer;
        }
      }
      if (isFaqPage) {
        node = { faqId, mainEntityArray };
        return;
      }
    }
    ts.forEachChild(n, visit);
  }
  visit(pageSf);
  return node;
}

function extractMainEntity(arrayLiteral) {
  const items = [];
  for (const element of arrayLiteral.elements) {
    if (!ts.isObjectLiteralExpression(element)) return null;
    let name = null;
    let text = null;
    for (const prop of element.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const propName = prop.name.getText().replace(/^["']|["']$/g, "");
      if (propName === "name" && ts.isStringLiteral(prop.initializer)) name = prop.initializer.text;
      if (propName === "acceptedAnswer" && ts.isObjectLiteralExpression(prop.initializer)) {
        for (const ansProp of prop.initializer.properties) {
          if (!ts.isPropertyAssignment(ansProp)) continue;
          const ansName = ansProp.name.getText().replace(/^["']|["']$/g, "");
          if (ansName === "text" && ts.isStringLiteral(ansProp.initializer)) text = ansProp.initializer.text;
        }
      }
    }
    if (name === null || text === null) return null;
    items.push({ q: name, a: text });
  }
  return items;
}

function listExtractedSlugs() {
  const extraction = JSON.parse(fs.readFileSync(path.join(__dirname, "faq-extraction.json"), "utf8"));
  return Object.keys(extraction);
}

function main() {
  const slugs = listExtractedSlugs();
  const results = [];
  const hashToSlugs = new Map();

  for (const slug of slugs) {
    if (ALREADY_DONE.has(slug)) continue;

    const contentPath = path.join(storesDir, slug, "_components", "StoreCouponsContent.tsx");
    const pagePath = path.join(storesDir, slug, "page.tsx");

    const contentSf = parseSourceFile(contentPath);
    const faqArray = findFaqMapArray(contentSf);
    if (!faqArray) {
      results.push({ slug, pass: false, reason: "source FAQ array not found on re-parse" });
      continue;
    }
    const sourceItems = extractSourceItems(faqArray);
    if (!sourceItems) {
      results.push({ slug, pass: false, reason: "failed to re-extract source items" });
      continue;
    }

    const pageSf = parseSourceFile(pagePath);
    const faqPageNode = findFaqPageNode(pageSf);
    if (!faqPageNode || !faqPageNode.mainEntityArray) {
      results.push({ slug, pass: false, reason: "no FAQPage.mainEntity found in page.tsx" });
      continue;
    }
    const schemaItems = extractMainEntity(faqPageNode.mainEntityArray);
    if (!schemaItems) {
      results.push({ slug, pass: false, reason: "failed to extract schema mainEntity items" });
      continue;
    }

    let pass = true;
    let reason = "";
    if (schemaItems.length !== sourceItems.length) {
      pass = false;
      reason = `count mismatch: source=${sourceItems.length} schema=${schemaItems.length}`;
    } else {
      for (let i = 0; i < sourceItems.length; i++) {
        if (schemaItems[i].q !== sourceItems[i].q || schemaItems[i].a !== sourceItems[i].a) {
          pass = false;
          reason = `mismatch at index ${i}`;
          break;
        }
      }
    }

    const expectedFaqId = `https://www.couponsbit.us/stores/${slug}#faq`;
    if (pass && faqPageNode.faqId !== expectedFaqId) {
      pass = false;
      reason = `faqId mismatch: expected ${expectedFaqId}, got ${faqPageNode.faqId}`;
    }

    results.push({ slug, pass, reason, itemCount: schemaItems.length });

    const hash = crypto.createHash("sha1").update(JSON.stringify(schemaItems)).digest("hex");
    if (!hashToSlugs.has(hash)) hashToSlugs.set(hash, []);
    hashToSlugs.get(hash).push(slug);
  }

  const failed = results.filter((r) => !r.pass);
  const passed = results.filter((r) => r.pass);

  console.log(`Verified: ${results.length}`);
  console.log(`Pass: ${passed.length}`);
  console.log(`Fail: ${failed.length}`);
  if (failed.length) {
    console.log("\n--- Failures ---");
    failed.forEach((f) => console.log(`${f.slug}: ${f.reason}`));
  }

  const collisions = [...hashToSlugs.entries()].filter(([, slugList]) => slugList.length > 1);
  console.log(`\nCross-store collisions: ${collisions.length}`);
  if (collisions.length) {
    collisions.forEach(([hash, slugList]) => console.log(`  ${hash}: ${slugList.join(", ")}`));
  }

  const itemCounts = passed.map((r) => r.itemCount);
  if (itemCounts.length) {
    console.log(`\nItem count range: min=${Math.min(...itemCounts)} max=${Math.max(...itemCounts)}`);
  }

  if (failed.length || collisions.length) process.exitCode = 1;
}

main();
