import { HeroModel } from "../model/hero.model.js";

async function createHero(req, res) {
  const createdHero = await HeroModel.create(req.body);
  res.status(201).json(createdHero);
}

export const heroContoller = {
  createHero,
};
