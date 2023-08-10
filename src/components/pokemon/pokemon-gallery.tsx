"use client";
import { grid } from "../../../styled-system/patterns";
import { usePokemonStore } from "@/store/pokemon";

import PokemonItem from "./pokemon-item";

export default function PokemonGallery() {
  const { pokemonList } = usePokemonStore();

  return (
    <div className={grid({ columns: 3 })}>
      {pokemonList.slice(0, 10).map((pokemon, idx) => (
        <PokemonItem key={idx} pokemon={pokemon} />
      ))}
    </div>
  );
}
