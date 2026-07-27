import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the English cultural objects homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Cultural keepsakes shaped by sound, craft and story\./);
  assert.match(html, /Buddhist-inspired vocal music/);
  assert.match(html, /Chinese instrumental music/);
  assert.match(html, /Collectors and gift buyers/);
  assert.match(html, /Channel partners/);
  assert.match(html, /Museums and cultural institutions/);
  assert.match(html, /Collectible timepieces/);
  assert.match(html, /Discuss a personal commission/);
  assert.match(html, /Discuss a channel partnership/);
  assert.match(html, /Discuss an institutional collaboration/);
  assert.match(html, /Quiet reflection/);
  assert.match(html, /Cultural access/);
  assert.match(html, /Shared memory/);
  assert.match(html, /mailto:540148510@qq\.com/);
  assert.match(html, /tel:\+8613712670275/);
  assert.match(html, /\+86 137 1267 0275/);
  assert.match(html, /Rights &amp; Permissions/);
  assert.doesNotMatch(html, /Public review edition/);
  assert.equal(new Set(html.match(/watch-\d{2}-transparent\.png/g) ?? []).size, 7);
  assert.doesNotMatch(html, /NFT|canonisation|protective field|energy field|global limited edition/i);
  assert.doesNotMatch(html, /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/u);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);

  const archivedAssets = await readdir(new URL("../public/media/internal-review/timepieces/", import.meta.url));
  assert.equal(archivedAssets.filter((name) => /^watch-\d{2}-transparent\.png$/.test(name)).length, 21);
});

test("public source contains no Han characters", async () => {
  const root = new URL("../", import.meta.url);
  const files = [
    "app/page.tsx",
    "app/layout.tsx",
    "app/globals.css",
    "app/components/AudioPlayer.tsx",
    "data/site.ts",
  ];

  for (const file of files) {
    const source = await readFile(new URL(file, root), "utf8");
    assert.doesNotMatch(source, /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/u, file);
  }
});
