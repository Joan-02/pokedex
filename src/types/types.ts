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
  pokemonData: PokemonDetails;
  onToggleFavorite: (id: number) => void;
  isFavorite: boolean;
  layout: string;
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
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    other?: {
      "official-artwork"?: {
        front_default: string;
      };
    };
  };
}

export interface FiltersModalProps {
  onClose: () => void;
  onApplyFilters: (selectedTypes: string[]) => void;
  initialSelectedTypes: string[];
}

export interface LikeButtonProps {
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export interface TypeFilterButtonProps {
  typeName: string;
  isActive: boolean;
  onClick: (name: string) => void;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
