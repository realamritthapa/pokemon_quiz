import fetch from "node-fetch";
// Test to get the data 
export const getPokemonData = (req, res) => {
  const pokemon = req.query.data;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => res.send(data.sprites.back_default));
};
