import { create } from "zustand";
import { Pokemon } from "@/types";

interface PokemonStore {
  pokemonList: Pokemon[];
  setPokemons: (pokemon: Pokemon[]) => void;
}

export const usePokemonStore = create<PokemonStore>()((set) => ({
  pokemonList: [],
  setPokemons: (pokemon) =>
    set((state) => ({ pokemonList: [...state.pokemonList, ...pokemon] })),
}));
