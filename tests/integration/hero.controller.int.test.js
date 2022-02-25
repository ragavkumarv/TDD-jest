import request from "supertest";
import app from "../../app.js";
import newHero from "../mock-data/new-hero.json";

const endpointUrl = "/heroes";
describe(endpointUrl, () => {
  it(`POST ${endpointUrl}`, async () => {
    const response = await request(app).post(endpointUrl).send(newHero);
    expect(response.statusCode).toBe(201);
    expect(response.body.char).toBe(newHero.char);
    expect(response.body.strength).toBe(newHero.strength);
    expect(response.body.iq).toBe(newHero.iq);
  });
});
