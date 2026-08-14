/**
 * Submits the site's current URL list to the IndexNow API
 * (https://www.indexnow.org/documentation) so Bing/Yandex/Naver get a
 * fast-path signal instead of waiting on their own crawl schedule.
 *
 * Runs automatically as a `postbuild` step (see package.json) so every
 * production build re-notifies IndexNow of the current URL set — this
 * codebase has no CMS/database "on save" hook to attach to, so the build
 * itself is the closest real analog to a "publish" event.
 *
 * Non-fatal by design: any failure here (network, site not yet live,
 * IndexNow outage) is logged but does not fail the build.
 */
const fs = require("fs");
const path = require("path");
const https = require("https");

const HOST = "www.couponsbit.us";
const KEY = "88f8437a96bfbaa93710d985c912b10e";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const baseDir = path.join(__dirname, "..");

function getStoreSlugs() {
  const content = fs.readFileSync(path.join(baseDir, "lib/stores-data.ts"), "utf8");
  const idPattern = /id:\s*"([^"]+)"/g;
  const ids = [];
  let m;
  while ((m = idPattern.exec(content)) !== null) ids.push(m[1]);
  return ids;
}

const STATIC_ROUTES = [
  "/",
  "/deals",
  "/deals-of-the-day",
  "/deals-of-the-week",
  "/stores",
  "/blog",
  "/blog/couponsbit-shopping-savings-guide",
  "/blog/holiday-shopping-calendar-2026",
  "/blog/how-to-save-money-shopping-online",
  "/categories",
  "/categories/electronics",
  "/categories/entertainment",
  "/categories/mobile",
  "/categories/software",
  "/categories/travel",
  "/about",
  "/contact",
  "/partner",
  "/faqs",
  "/careers",
  "/privacy-policy",
  "/terms-of-use",
];

const NUAGEWEAR_LOCATIONS = [
  "new-york",
  "boston",
  "los-angeles",
  "san-francisco",
  "seattle",
  "austin",
  "miami",
  "dallas",
  "atlanta",
];

function buildUrlList() {
  const slugs = getStoreSlugs();
  const storeUrls = slugs.map((slug) => `https://${HOST}/stores/${slug}`);
  const cityUrls = NUAGEWEAR_LOCATIONS.map(
    (city) => `https://${HOST}/stores/nuage-discount-code/${city}`
  );
  const staticUrls = STATIC_ROUTES.map((route) => `https://${HOST}${route}`);
  return [...staticUrls, ...storeUrls, ...cityUrls];
}

function submit(urlList) {
  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      INDEXNOW_ENDPOINT,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => resolve({ statusCode: res.statusCode, body }));
      }
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

async function main() {
  let urlList;
  try {
    urlList = buildUrlList();
  } catch (err) {
    console.warn(`[indexnow] Could not build URL list, skipping: ${err.message}`);
    return;
  }

  console.log(`[indexnow] Submitting ${urlList.length} URLs to ${INDEXNOW_ENDPOINT}...`);
  try {
    const result = await submit(urlList);
    console.log(`[indexnow] Response: HTTP ${result.statusCode}`);
    if (result.body) console.log(`[indexnow] Body: ${result.body}`);
    if (result.statusCode === 200 || result.statusCode === 202) {
      console.log("[indexnow] Submission accepted.");
    } else {
      console.warn("[indexnow] Non-success status — see response above.");
    }
  } catch (err) {
    console.warn(`[indexnow] Submission failed (non-fatal): ${err.message}`);
  }
}

main();
