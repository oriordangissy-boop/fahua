import assert from "node:assert/strict";
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

test("server-renders the private international review homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /法华 · FA HUA · 让东方文化点亮世界/);
  assert.match(html, /慈悲之声/);
  assert.match(html, /A voice of compassion/);
  assert.match(html, /法华 · 独立文化入口 \/ FA HUA · Independent cultural gateway/);
  assert.match(html, /内部审稿版本 · Private review edition/);
  assert.match(html, /音频接口已预留/);
  assert.match(html, /时间信物 \/ Time Objects/);
  assert.match(html, /Time, held as a vessel for cultural memory/);
  assert.equal(new Set(html.match(/watch-\d{2}-transparent\.png/g) ?? []).size, 21);
  assert.match(html, /联系项目团队 · Contact the project team/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});
