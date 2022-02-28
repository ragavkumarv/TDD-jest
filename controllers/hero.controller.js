import { HeroModel } from "../model/hero.model.js";

async function createHero(req, res) {
  const createdHero = await HeroModel.create(req.body);
  res.status(201).json(createdHero);
}

async function getHeroes(req, res) {
  const allHeroes = await HeroModel.find({});
  res.status(200).json(allHeroes);
}

export const heroContoller = {
  createHero,
  getHeroes,
};

// getHeroes -> unit + integeration
// HeroModel.find({})
