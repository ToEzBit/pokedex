"use client";
import { useRef } from "react";
import { usePokemonStore, Pokemon } from "@/store/pokemon";

export default function StoreInitializer({
  pokemons,
}: {
  pokemons: Pokemon[];
}) {
  const initialized = useRef(false);

  if (!initialized.current) {
    usePokemonStore.setState({ pokemons: pokemons });
    initialized.current = true;
  }

  return null;
}
