const request = require("supertest");
const db = require("../data/dbConfig.js");

const server = require("./server.js");

describe("server.js", () => {
  
  it('should return { api: "Do Or Do Not There Is No Try!" }', async () => {
    const res = await request(server).get("/");
    expect(res.body).toEqual({ api: "Do Or Do Not There Is No Try!" });
  });
});
describe('POST', ()=> {
  describe('GET', ()=>{
      it('Should return a 404', ()=>{
          return request(server)
          .get('/api/auth/login')
          .then(res => {
              expect(res.status).toBe(404)
          })
      })
      it('should return JSON response', ()=>{
          return request(server)
          .get('/api/auth/login')
          .then(res => {
              expect(res.type).toMatch('text/html')
          })  
       })  
  })
  describe("GET /sanitycheck", () => {
    it("should return 404 Not Found", () => {
      return request(server)
        .get("/sanitycheck")
        .expect(404);
    })});
    describe("POST /sanitycheck", () => {
      it("should return 404 Not Found", () => {
        return request(server)
          .post("/sanitycheck")
          .expect(404);
      })});
      describe("Put /sanitycheck", () => {
        it("should return 404 Not Found", () => {
          return request(server)
            .post("/sanitycheck")
            .expect(404);
        })}); 
        describe("Delete /sanitycheck", () => {
          it("should return 404 Not Found", () => {
            return request(server)
              .post("/sanitycheck")
              .expect(404);
          })});
          describe("GET /task", () => {
            it("should return 404 Not Found", () => {
              return request(server)
                .get("/sanitycheck")
                .expect(404);
            })});
            describe("POST /task", () => {
              it("should return 404 Not Found", () => {
                return request(server)
                  .post("/sanitycheck")
                  .expect(404);
              })});
              describe("Put /task", () => {
                it("should return 404 Not Found", () => {
                  return request(server)
                    .post("/sanitycheck")
                    .expect(404);
                })}); 
                describe("Delete /task", () => {
                  it("should return 404 Not Found", () => {
                    return request(server)
                      .post("/sanitycheck")
                      .expect(404);
                  })});
                  describe("GET /users", () => {
                    it("should return 404 Not Found", () => {
                      return request(server)
                        .get("/sanitycheck")
                        .expect(404);
                    })});
                    describe("POST /users", () => {
                      it("should return 404 Not Found", () => {
                        return request(server)
                          .post("/sanitycheck")
                          .expect(404);
                      })});
                      describe("Put /users", () => {
                        it("should return 404 Not Found", () => {
                          return request(server)
                            .post("/sanitycheck")
                            .expect(404);
                        })}); 
                        describe("Delete /users", () => {
                          it("should return 404 Not Found", () => {
                            return request(server)
                              .post("/sanitycheck")
                              .expect(404);
                          })});
});


