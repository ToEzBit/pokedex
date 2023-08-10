"use client";
import { useRef } from "react";
import { usePokemonStore } from "@/store/pokemon";
import { Pokemon } from "@/types";

export default function StoreInitializer({
  pokemonList,
}: {
  pokemonList: Pokemon[];
}) {
  const initialized = useRef(false);

  if (!initialized.current) {
    usePokemonStore.setState({ pokemonList: pokemonList });
    initialized.current = true;
  }

  return null;
}
