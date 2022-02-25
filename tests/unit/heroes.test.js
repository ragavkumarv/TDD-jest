import httpMocks from "node-mocks-http";
import { heroContoller } from "../../controllers/hero.controller.js";

let req, res;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe("Hero controller", () => {
  it("should have createTodo function", () => {
    expect(typeof heroContoller.createHero).toBe("function");
  });

  it("should return 201 response code", async () => {
    await heroContoller.createHero(req, res);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  // it("should return json body is response", async () => {
  //   await hello(req, res);
  //   expect(res._getJSONData()).toStrictEqual({ message: "🙋‍♂️, 🌏!!!" });
  // });
});

// mock/fake value
//   const res = {
//      json:  () => {}
//   }
