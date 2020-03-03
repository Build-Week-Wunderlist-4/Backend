const request = require("supertest");
const db = require("../data/dbConfig.js");

const server = require("./server.js");

describe("server.js", () => {
  //afterEach(async () => {
  //await db("put db here").truncate();
  //});

  // SHOULD RETURN { api: "up" } FROM GET / ENDPOINT
  it('should return { api: "Do Or Do Not There Is No Try!" }', async () => {
    const res = await request(server).get("/");
    expect(res.body).toEqual({ api: "Do Or Do Not There Is No Try!" });
  });
});