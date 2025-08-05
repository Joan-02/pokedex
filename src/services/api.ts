import type { PokemonListResponse } from "../types/types";

const API_BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<PokemonListResponse> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: PokemonListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw error;
  }
};
