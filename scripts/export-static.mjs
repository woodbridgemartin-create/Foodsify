import { access, cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";

const candidates = ["dist/client", ".output/public", "dist/public"];
let source;
for (const candidate of candidates) {
  try { await access(path.join(candidate, "index.html")); source = candidate; break; } catch { /* Try the next supported output layout. */ }
}
if (!source) throw new Error("No prerendered website found. Run npm run build first.");
const pages = ["how-it-works", "for-businesses", "faqs", "contact", "terms", "privacy", "cookies"];
for (const page of pages) await access(path.join(source, page, "index.html"));
const destination = "dist/cloudflare-pages";
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });
for (const excluded of ["_worker.js", "_routes.json", "output.json", ".wrangler", "server"]) {
  await rm(path.join(destination, excluded), { recursive: true, force: true });
}
await cp("public/_redirects", path.join(destination, "_redirects"));
const entries = await readdir(destination);
if (!entries.includes("index.html")) throw new Error("Static export is missing its homepage.");
console.log(`Foodsify static website exported to ${destination}. No server or Worker is included.`);