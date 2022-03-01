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

async function deleteHero(req, res) {
  try {
    const deletedHero = await HeroModel.findByIdAndDelete(req.params.heroId);
    if (deletedHero) {
      res.status(200).json(deletedHero);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateHero(req, res) {
  // How? -> use new syntax and not old syntax (useFindAndModify)
  try {
    // console.log(req.params, req.query, req.body);
    const updatedHero = await HeroModel.findByIdAndUpdate(
      req.params.heroId,
      req.body,
      {
        new: true,
        useFindAndModify: false,
      }
    );
    if (updatedHero) {
      res.status(200).json(updatedHero);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export const heroContoller = {
  createHero,
  getHeroes,
  deleteHero,
  updateHero,
};

// getHeroes -> unit + integeration
// HeroModel.find({})
