import { usePokemonStore } from "@/store/pokemon";

export default function PokemonItem() {
  return (
    <div style={{ backgroundColor: "red" }}>
      {usePokemonStore
        .getState()
        .pokemons.slice(0, 10)
        .map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
    </div>
  );
}
