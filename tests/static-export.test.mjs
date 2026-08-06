import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const out = new URL("../out/", import.meta.url);

async function collectHtml(directoryUrl) {
  const entries = await readdir(directoryUrl, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const url = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directoryUrl);
    if (entry.isDirectory()) files.push(...await collectHtml(url));
    else if (entry.name.endsWith(".html")) files.push(url);
  }
  return files;
}

test("static export contains every public route", async () => {
  const expected = [
    "index.html",
    "brief/index.html",
    "work-with-us/index.html",
    ...["personal-keepsake", "thoughtful-gift", "institutional-gift", "portrait-family-commission", "sound-led-edition", "heritage-craft-collaboration", "cultural-exchange-collection"].map((slug) => `objects/${slug}/index.html`),
  ];
  for (const path of expected) await access(new URL(path, out));
});

test("all exported internal page links resolve", async () => {
  const pages = await collectHtml(out);
  const missing = [];
  for (const page of pages) {
    const html = await readFile(page, "utf8");
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
    for (const href of hrefs) {
      if (!href.startsWith("/") || href.startsWith("/_next/") || href.startsWith("/media/") || href === "/og.png") continue;
      const pathname = href.split(/[?#]/)[0];
      const relative = pathname === "/" ? "index.html" : `${pathname.replace(/^\//, "").replace(/\/$/, "")}/index.html`;
      try {
        await access(new URL(relative, out));
      } catch {
        missing.push(`${page.pathname} -> ${href}`);
      }
    }
  }
  assert.deepEqual(missing, []);
});

test("custom-domain export carries the root-domain marker", async () => {
  const cname = await readFile(new URL("CNAME", out), "utf8");
  assert.equal(cname.trim(), "u-wow.be");
});
