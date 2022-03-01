import request from "supertest";
import app from "../../app.js";
import newHero from "../mock-data/new-hero.json";

const endpointUrl = "/heroes";
const testHero = {
  char: "👨‍🦱",
  strength: 60,
  iq: 120,
};
const nonExistingHeroId = "6218c885bbdca1cc3282645f";
let newHeroId;
describe(endpointUrl, () => {
  it(`POST ${endpointUrl}`, async () => {
    const response = await request(app).post(endpointUrl).send(newHero);
    expect(response.statusCode).toBe(201);
    expect(response.body.char).toBe(newHero.char);
    expect(response.body.strength).toBe(newHero.strength);
    expect(response.body.iq).toBe(newHero.iq);
    newHeroId = response.body._id;
  });

  it(`POST ${endpointUrl} - should return error 500 malformed`, async () => {
    const missingStrength = {
      char: "🦸‍♂️",
      iq: 100,
    };
    const response = await request(app).post(endpointUrl).send(missingStrength);
    expect(response.statusCode).toBe(500);
    expect(response.body.message).toBe(
      "Hero validation failed: strength: Path `strength` is required."
    );
  });

  it(`GET ${endpointUrl}`, async () => {
    const response = await request(app).get(endpointUrl);

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].char).toBeDefined();
    expect(response.body[0].strength).toBeDefined();
    expect(response.body[0].iq).toBeDefined();
  });

  it(`PUT ${endpointUrl}`, async () => {
    const response = await request(app)
      .put(`${endpointUrl}/${newHeroId}`)
      .send(testHero);
    expect(response.statusCode).toBe(200);
    expect(response.body.char).toBe(testHero.char);
    expect(response.body.strength).toBe(testHero.strength);
    expect(response.body.iq).toBe(testHero.iq);
  });

  it(`should return 404 on PUT ${endpointUrl}`, async () => {
    const response = await request(app)
      .put(`${endpointUrl}/${nonExistingHeroId}`)
      .send(testHero);
    expect(response.statusCode).toBe(404);
  });

  it(`Delete ${endpointUrl}`, async () => {
    const response = await request(app)
      .put(`${endpointUrl}/${newHeroId}`)
      .send();
    expect(response.statusCode).toBe(200);
    expect(response.body.char).toBe(testHero.char);
    expect(response.body.strength).toBe(testHero.strength);
    expect(response.body.iq).toBe(testHero.iq);
  });

  it(`should return 404 on Delete ${endpointUrl}`, async () => {
    const response = await request(app)
      .delete(`${endpointUrl}/${nonExistingHeroId}`)
      .send();
    expect(response.statusCode).toBe(404);
  });
});

// typeof [1, 3, 4]
