"use client";

import { useEffect } from "react";
import { usePokemonStore } from "@/store/pokemon";

export default function PokemonGallery() {
  const { pokemons } = usePokemonStore();

  return (
    <div>
      {pokemons.slice(0, 10).map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
}
