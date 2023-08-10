import { css } from "../../styled-system/css";
import { PokemonGallery, PokemonItem } from "@/components/pokemon";

import { getPokemon } from "@/apis/pokemon";

import { usePokemonStore } from "@/store/pokemon";
import StoreInitializer from "@/store/store-initializer";

export default async function Home() {
  const pokemons = await getPokemon();
  usePokemonStore.setState({ pokemons: pokemons.data.results });

  return (
    <main>
      <StoreInitializer pokemons={pokemons.data.results} />
      <PokemonGallery />
      <PokemonItem />
    </main>
  );
}
