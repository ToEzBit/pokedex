import { create } from "zustand";

interface PokemonStore {
  pokemons: Pokemon[];
  setPokemons: (pokemon: Pokemon[]) => void;
}

export interface Pokemon {
  name: string;
  url: string;
}

export const usePokemonStore = create<PokemonStore>()((set) => ({
  pokemons: [],
  setPokemons: (pokemon) =>
    set((state) => ({ pokemons: [...state.pokemons, ...pokemon] })),
}));
