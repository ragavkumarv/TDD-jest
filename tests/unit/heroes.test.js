import jest from "jest-mock";
import httpMocks from "node-mocks-http";
import { heroContoller } from "../../controllers/hero.controller.js";
import { HeroModel } from "../../model/hero.model.js";
import allHeroes from "../mock-data/all-heroes.json";
import newHero from "../mock-data/new-hero.json";

HeroModel.create = jest.fn(); // tracker chip
HeroModel.find = jest.fn(); // tracker chip
let req, res;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe("Herocontroller.createHero", () => {
  beforeEach(() => {
    req.body = newHero;
  });

  it("should have createHero function", () => {
    expect(typeof heroContoller.createHero).toBe("function");
  });

  it("should call HeroModel.create", async () => {
    await heroContoller.createHero(req, res);
    expect(HeroModel.create).toBeCalledWith(newHero);
    // HeroModel.create(newHero); -> Atlas
  });

  it("should return 201 response code", async () => {
    await heroContoller.createHero(req, res);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
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

describe("Herocontroller.getHeroes", () => {
  it("should have getHeroes function", () => {
    expect(typeof heroContoller.getHeroes).toBe("function");
  });

  it("should call HeroModel.find({})", async () => {
    await heroContoller.getHeroes(req, res);
    expect(HeroModel.find).toHaveBeenCalledWith({});
  });

  it("should return 200 response code and all Heroes", async () => {
    HeroModel.find.mockReturnValue(allHeroes);
    await heroContoller.getHeroes(req, res);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(allHeroes);
    // Value provided by HeroModel(mock) -> Are we getting the same data in response?
  });
});
