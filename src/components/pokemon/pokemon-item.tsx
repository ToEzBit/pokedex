import { Pokemon } from "@/types";

export default function PokemonItem({ pokemon }: { pokemon: Pokemon }) {
  return <div style={{ backgroundColor: "red" }}>{pokemon.name}</div>;
}
