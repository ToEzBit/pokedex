"use client";
import { css } from "@styledSystem/css";
import { Center } from "@styledSystem/jsx";
import { useEffect, useState } from "react";
import Image from "next/image";

import { PokemonRes, Pokemon } from "@/types";
import { getPokemonById } from "@/apis/pokemon";

export default function PokemonItem({
  pokemonRes,
}: {
  pokemonRes: PokemonRes;
}) {
  const [isFetch, setIsFetch] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    setIsFetch(true);
    const fetchPokemon = async () => {
      try {
        const res = await getPokemonById(pokemonRes.url.split("/")[6]);
        setPokemon(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsFetch(false);
      }
    };
    fetchPokemon();
  }, []);

  if (isFetch) {
    return (
      <div
        className={css({
          borderRadius: "8px",
          boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.20)",
          pt: "4px",
        })}
      >
        <p> ... loading ...</p>
      </div>
    );
  }

  if (!isFetch && pokemon?.name) {
    return (
      <Center
        flexDirection="column"
        borderRadius="8px"
        boxShadow="0px 1px 3px 1px rgba(0, 0, 0, 0.20)"
        pt="4px"
        h="100%"
        cursor="pointer"
        _hover={{
          animation: "scaleUp 200ms forwards",
        }}
      >
        <div className={css({ zIndex: "1" })}>
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width={72}
            height={72}
          />
        </div>
        <div
          className={css({
            backgroundColor: "grayScale.background",
            w: "full",
            borderRadius: "7px",
            pt: "24px",
            textAlign: "center",
            mt: "-20px",
          })}
        >
          <p className={css({ textTransform: "capitalize" })}>{pokemon.name}</p>
        </div>
      </Center>
    );
  }
}
