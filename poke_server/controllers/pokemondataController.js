import fetch from "node-fetch";
export const getPokemonData = (req, res) => {
  const pokemon = req.query.data;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => res.send(data));
};
