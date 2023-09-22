import fetch from "node-fetch";
export const getPokemonPic = async () => {
  let randomValue = Math.floor(Math.random() * 1250) + 1;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomValue}`
  );
  const data = await response.json();
  const pokePic = await data.sprites.front_shiny;
  return pokePic;
};
