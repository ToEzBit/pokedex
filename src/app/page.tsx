import { css } from "@styledSystem/css";
import { PokemonGallery } from "@/components/pokemon";

import { getPokemon } from "@/apis/pokemon";

import { usePokemonStore } from "@/store/pokemon";
import StoreInitializer from "@/store/store-initializer";

export default async function Home() {
  const pokemonRes = await getPokemon();
  usePokemonStore.setState({ pokemonList: pokemonRes.data.results });

  return (
    <main
      className={css({
        bg: "grayScale.white",
        mx: "4px",
        py: "24px",
        px: "12px",
        shadow: "inner",
        borderRadius: "8px",
        lg: { mx: "8px", px: "24px", py: "48px" },
      })}
    >
      <StoreInitializer pokemonList={pokemonRes.data.results} />
      <PokemonGallery />
    </main>
  );
}
