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

  // it("should return 200 response code", async () => {
  //   await hello(req, res);
  //   expect(res.statusCode).toBe(200);
  //   expect(res._isEndCalled()).toBeTruthy();
  // });

  // it("should return json body is response", async () => {
  //   await hello(req, res);
  //   expect(res._getJSONData()).toStrictEqual({ message: "🙋‍♂️, 🌏!!!" });
  // });
});

// mock/fake value
//   const res = {
//      json:  () => {}
//   }
