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

export const getAllPokemons = async (): Promise<PokemonDetails[]> => {
  try {
    const listResponse = await fetch(`${API_BASE_URL}/pokemon?limit=1`);
    const listData: PokemonListResponse = await listResponse.json();
    const count = listData.count;

    const fullListResponse = await fetch(
      `${API_BASE_URL}/pokemon?limit=${count}`
    );
    const fullListData: PokemonListResponse = await fullListResponse.json();

    const detailPromises = fullListData.results.map((p) =>
      getPokemonDetails(p.name)
    );
    const allDetails = await Promise.all(detailPromises);

    return allDetails;
  } catch (error) {
    console.error("Error fetching all Pokémon details:", error);
    throw error;
  }
};
