import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("homepage exposes real navigation and project paths", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Cultural keepsakes shaped by sound, craft and story\./);
  assert.match(html, /href="\/objects\/personal-keepsake\/"/);
  assert.match(html, /href="\/work-with-us\/"/);
  assert.match(html, /href="\/brief\/"/);
  assert.match(html, /View object direction/);
  assert.match(html, /Audio programme on request/);
  assert.match(html, /Request an audio programme/);
  assert.doesNotMatch(html, /disabled[^>]*audio|Audio will open when permissions are in place/i);
  assert.equal(new Set(html.match(/watch-\d{2}-transparent\.png/g) ?? []).size, 7);
  assert.doesNotMatch(html, /NFT|canonisation|protective field|energy field|global limited edition/i);
  assert.doesNotMatch(html, /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/u);
});

test("selected object, partnership, and brief routes render", async () => {
  const routes = [
    ["/objects/personal-keepsake/", /A starting point for a project/],
    ["/work-with-us/", /Begin with the audience, occasion, and cultural context/],
    ["/brief/", /Generate email enquiry/],
  ];

  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, expected, path);
    assert.doesNotMatch(html, /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/u, path);
  }
});

test("all 21 original timepiece assets remain available", async () => {
  const archivedAssets = await readdir(new URL("../public/media/internal-review/timepieces/", import.meta.url));
  assert.equal(archivedAssets.filter((name) => /^watch-\d{2}-transparent\.png$/.test(name)).length, 21);
});

async function collectSourceFiles(directoryUrl) {
  const entries = await readdir(directoryUrl, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const url = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directoryUrl);
    if (entry.isDirectory()) files.push(...await collectSourceFiles(url));
    else if (/\.(?:ts|tsx|css)$/.test(entry.name)) files.push(url);
  }
  return files;
}

test("public source contains no Han characters", async () => {
  const files = [
    ...await collectSourceFiles(new URL("../app/", import.meta.url)),
    ...await collectSourceFiles(new URL("../data/", import.meta.url)),
    ...await collectSourceFiles(new URL("../lib/", import.meta.url)),
  ];

  for (const file of files) {
    const source = await readFile(file, "utf8");
    assert.doesNotMatch(source, /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/u, file.pathname);
  }
});
