import { Pokemon } from "@/types";

export default function PokemonItem({ pokemon }: { pokemon: Pokemon }) {
  return <div>{pokemon.name}</div>;
}
