import { create } from "zustand";
import { PokemonRes } from "@/types";

interface PokemonStore {
  pokemonList: PokemonRes[];
  setPokemons: (pokemon: PokemonRes[]) => void;
}

export const usePokemonStore = create<PokemonStore>()((set) => ({
  pokemonList: [],
  setPokemons: (pokemon) =>
    set((state) => ({ pokemonList: [...state.pokemonList, ...pokemon] })),
}));
