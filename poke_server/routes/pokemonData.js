import express from "express";
import { getPokemonData } from "../controllers/pokemondataController.js";
const router = express.Router();
// Testing to see if data is recieved properly
router.get("/pokemondata", getPokemonData);

export default router;
