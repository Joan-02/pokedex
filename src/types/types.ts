export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface CardProps {
  pokemonData: PokemonListItem;
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
  height: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    basestat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}
