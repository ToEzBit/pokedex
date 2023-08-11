export interface PokemonRes {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}
