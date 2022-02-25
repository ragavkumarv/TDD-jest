import jest from "jest-mock";
import httpMocks from "node-mocks-http";
import { heroContoller } from "../../controllers/hero.controller.js";
import { HeroModel } from "../../model/hero.model.js";
import newHero from "../mock-data/new-hero.json";

HeroModel.create = jest.fn(); // tracker chip
let req, res;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe("Hero controller", () => {
  beforeEach(() => {
    req.body = newHero;
  });

  it("should have createTodo function", () => {
    expect(typeof heroContoller.createHero).toBe("function");
  });

  it("should return 201 response code", async () => {
    await heroContoller.createHero(req, res);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should call HeroModel.create", async () => {
    await heroContoller.createHero(req, res);
    expect(HeroModel.create).toBeCalledWith(newHero);
    // HeroModel.create(newHero); -> Atlas
  });

  it("should call HeroModel.create", async () => {
    HeroModel.create.mockReturnValue(newHero); // fake returnvalue of create
    await heroContoller.createHero(req, res);
    expect(res._getJSONData()).toStrictEqual(newHero);
  });
});

// mock/fake value
//   const res = {
//      json:  () => {}
//   }
