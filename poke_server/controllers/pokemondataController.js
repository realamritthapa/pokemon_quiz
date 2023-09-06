import fetch from "node-fetch";
export const getPokemonData = (req, res) => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => response.json())
    .then((data) => res.send(data));
};
