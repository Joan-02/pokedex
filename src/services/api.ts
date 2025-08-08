import type { PokemonListResponse, PokemonDetails } from "../types/types";

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

export const getAllPokemons = async (): Promise<PokemonListItem[]> => {
  try {
    const initialResponse = await fetch(`${API_BASE_URL}/pokemon`);
    if (!initialResponse.ok) throw new Error("Failed to get Pokémon count.");

    const initialData: PokemonListResponse = await initialResponse.json();
    const totalPokemonCount = initialData.count;

    const allPokemonResponse = await fetch(
      `${API_BASE_URL}/pokemon?limit=${totalPokemonCount}`
    );
    if (!allPokemonResponse.ok)
      throw new Error("Failed to fetch the full Pokémon list.");

    const allPokemonData: PokemonListResponse = await allPokemonResponse.json();

    return allPokemonData.results;
  } catch (error) {
    console.error("Error fetching all Pokémon:", error);
    throw error;
  }
};

export const getPokemonDetails = async (
  identifier: string | number
): Promise<PokemonDetails> => {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon/${identifier}`);

    if (!response.ok) {
      throw new Error(`Error fetching details for Pokémon ${identifier}`);
    }

    const data: PokemonDetails = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch details for Pokémon ${identifier}:`, error);
    throw error;
  }
};
