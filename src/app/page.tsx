import { css } from "../../styled-system/css";
import { PokemonGallery, PokemonItem } from "@/components/pokemon";

import { getPokemon } from "@/apis/pokemon";

import { usePokemonStore } from "@/store/pokemon";
import StoreInitializer from "@/store/store-initializer";

export default async function Home() {
  const pokemonRes = await getPokemon();
  usePokemonStore.setState({ pokemonList: pokemonRes.data.results });

  return (
    <main>
      <StoreInitializer pokemonList={pokemonRes.data.results} />
      <PokemonGallery />
      {/* <PokemonItem /> */}
    </main>
  );
}
