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

test("server-renders the public evidence-labelled homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /法华 · FA HUA · 让东方文化点亮世界/);
  assert.match(html, /慈悲之声/);
  assert.match(html, /A voice of compassion/);
  assert.match(html, /法华 · 独立文化入口 \/ FA HUA · Independent cultural gateway/);
  assert.match(html, /公开审稿版本 · Public review edition/);
  assert.match(html, /音频接口已预留/);
  assert.match(html, /安民心 · 惠民生 · 聚民众/);
  assert.match(html, /标准化负责效率，定制化说明价值从何而来/);
  assert.match(html, /一级一旗舰 \/ One flagship per level/);
  assert.match(html, /四十九格，是长期地图，不是四十九件现货/);
  assert.equal(new Set(html.match(/watch-\d{2}-transparent\.png/g) ?? []).size, 7);
  assert.match(html, /联系 BD · Contact BD/);
  assert.doesNotMatch(html, /NFT|封圣|护身结界|能量场|全球限量|百万级|利润奶牛|验资门槛/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);

  const archivedAssets = await readdir(new URL("../public/media/internal-review/timepieces/", import.meta.url));
  assert.equal(archivedAssets.filter((name) => /^watch-\d{2}-transparent\.png$/.test(name)).length, 21);
});
