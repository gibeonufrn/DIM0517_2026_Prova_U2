const { test, before, after } = require("node:test");
const assert = require("node:assert");
const { server } = require("../src/index");

let baseUrl;

before(async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  baseUrl = `http://localhost:${server.address().port}`;
});

after(() => server.close());

test("GET /hello", async () => {
  const res = await fetch(`${baseUrl}/hello`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), { message: "Hello, World!" });
});

test("GET /healthy", async () => {
  const res = await fetch(`${baseUrl}/healthy`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), { status: "healthy" });
});

console.log("Teste pipe!");

console.log("Teste pipe 2!");