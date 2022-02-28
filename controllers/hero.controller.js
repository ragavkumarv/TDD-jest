import { HeroModel } from "../model/hero.model.js";

async function createHero(req, res) {
  try {
    const createdHero = await HeroModel.create(req.body);
    res.status(201).json(createdHero);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getHeroes(req, res) {
  try {
    const allHeroes = await HeroModel.find({});
    res.status(200).json(allHeroes);
  } catch (err) {
    res.status(500).json(err);
  }
}

export const heroContoller = {
  createHero,
  getHeroes,
};

// getHeroes -> unit + integeration
// HeroModel.find({})
