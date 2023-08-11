"use client";
import { Grid } from "@styledSystem/jsx";
import { usePokemonStore } from "@/store/pokemon";

import PokemonItem from "./pokemon-item";

export default function PokemonGallery() {
  const { pokemonList } = usePokemonStore();

  return (
    <Grid columns={3} gap={{ base: 4, lg: 8 }}>
      {pokemonList.slice(0, 18).map((pokemonRes, idx) => (
        <PokemonItem key={idx} pokemonRes={pokemonRes} />
      ))}
    </Grid>
  );
}
