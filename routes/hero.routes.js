import express from "express";
import { heroContoller } from "../controllers/hero.controller.js";
const router = express.Router();

router.post("/", heroContoller.createHero);
router.get("/", heroContoller.getHeroes);
router.delete("/:heroId", heroContoller.deleteHero);
router.put("/:heroId", heroContoller.updateHero);

export default router;
