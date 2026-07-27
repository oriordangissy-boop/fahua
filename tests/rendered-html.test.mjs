import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
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

test("server-renders the customer-facing cultural objects homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /法华文化信物 · 东方声音、华乐与非遗工艺/);
  assert.match(html, /把一段东方声音，留成可以珍藏与传承的文化信物/);
  assert.match(html, /Turn an Eastern voice into a cultural object/);
  assert.match(html, /个人 \/ 礼赠/);
  assert.match(html, /渠道 \/ 代理/);
  assert.match(html, /文化机构/);
  assert.match(html, /腕间文化信物/);
  assert.match(html, /声音礼赠组合/);
  assert.match(html, /非遗器物与专场共创/);
  assert.match(html, /三种合作方式/);
  assert.match(html, /四步把想法落到作品/);
  assert.match(html, /安民心 · 惠民生 · 聚民众/);
  assert.doesNotMatch(html, /公开审稿版本|Public review edition/);
  assert.doesNotMatch(html, /标准化负责效率|四十九格|7×7 文化信物地图|权利状态/);
  assert.equal(new Set(html.match(/watch-\d{2}-transparent\.png/g) ?? []).size, 7);
  assert.match(html, /联系 BD · Contact BD/);
  assert.doesNotMatch(html, /NFT|封圣|护身结界|能量场|全球限量|百万级|利润奶牛|验资门槛/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);

  const archivedAssets = await readdir(new URL("../public/media/internal-review/timepieces/", import.meta.url));
  assert.equal(archivedAssets.filter((name) => /^watch-\d{2}-transparent\.png$/.test(name)).length, 21);
});
