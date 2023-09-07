import express from "express";
import { getPokemonData } from "../controllers/pokemondataController.js";
const router = express.Router();

router.get("/pokemondata", getPokemonData);

export default router;
