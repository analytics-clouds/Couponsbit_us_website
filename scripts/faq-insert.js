/**
 * Inserts a FAQPage node (built from faq-extraction.json) as the last
 * element of each target store page's JSON-LD `@graph` array.
 *
 * Uses anchored text insertion rather than re-printing the file via the TS
 * AST — a full re-print would reformat the whole file to TS's own style and
 * produce noisy diffs. The anchor (closing `],\n};\n\nexport default
 * function`) is confirmed identical across every sampled page.tsx.
 *
 * Idempotent: files that already contain "@type": "FAQPage" are skipped, so
 * this can be safely re-run.
 */
const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "..");
const storesDir = path.join(baseDir, "app", "stores");

const extraction = JSON.parse(fs.readFileSync(path.join(__dirname, "faq-extraction.json"), "utf8"));

const ANCHOR = /(\r?\n)(\s*)\],(\r?\n)\};(\r?\n)(\r?\n)export default (?:async )?function/;

function serializeFaqBlock(faqId, items, baseIndent, nl) {
  const i1 = baseIndent + "  ";
  const i2 = i1 + "  ";
  const i3 = i2 + "  ";
  const i4 = i3 + "  ";
  const i5 = i4 + "  ";

  const questions = items
    .map(
      ({ q, a }) =>
        `${i3}{${nl}` +
        `${i4}"@type": "Question",${nl}` +
        `${i4}name: ${JSON.stringify(q)},${nl}` +
        `${i4}acceptedAnswer: {${nl}` +
        `${i5}"@type": "Answer",${nl}` +
        `${i5}text: ${JSON.stringify(a)},${nl}` +
        `${i4}},${nl}` +
        `${i3}},`
    )
    .join(nl);

  return (
    `${i1}{${nl}` +
    `${i2}"@type": "FAQPage",${nl}` +
    `${i2}"@id": ${JSON.stringify(faqId)},${nl}` +
    `${i2}mainEntity: [${nl}` +
    `${questions}${nl}` +
    `${i2}],${nl}` +
    `${i1}},`
  );
}

let inserted = 0;
let skippedAlreadyDone = 0;
const failures = [];

for (const [slug, { faqId, items }] of Object.entries(extraction)) {
  const pagePath = path.join(storesDir, slug, "page.tsx");
  const raw = fs.readFileSync(pagePath, "utf8");

  if (raw.includes('"@type": "FAQPage"')) {
    skippedAlreadyDone++;
    continue;
  }

  const nl = raw.includes("\r\n") ? "\r\n" : "\n";
  const match = raw.match(ANCHOR);
  if (!match) {
    failures.push({ slug, reason: "closing anchor not found" });
    continue;
  }

  const indent = match[2]; // indentation of the array's closing "],"
  const faqBlock = serializeFaqBlock(faqId, items, indent, nl);

  const tailFromExportDefault = match[0].slice(match[0].indexOf("export default"));
  const before = raw.slice(0, match.index);
  const after = raw.slice(match.index + match[0].length);
  const newContent =
    before + `${nl}${nl}${faqBlock}${nl}${indent}],${nl}};${nl}${nl}${tailFromExportDefault}` + after;

  fs.writeFileSync(pagePath, newContent, "utf8");
  inserted++;
}

console.log(`FAQPage inserted: ${inserted}`);
console.log(`Already had FAQPage (skipped): ${skippedAlreadyDone}`);
console.log(`Failures: ${failures.length}`);
if (failures.length) {
  console.log(JSON.stringify(failures, null, 2));
}
