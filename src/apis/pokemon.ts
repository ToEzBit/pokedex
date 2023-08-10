import axios from "axios";
export const getPokemon = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
};
