import { createContext, useState, useEffect, useContext } from "react";
import type { ReactNode } from "react";
import type { PokemonDetails } from "../types/types";
import { getAllPokemons } from "../services/api";

interface PokemonDataContextType {
  allPokemons: PokemonDetails[];
  isLoading: boolean;
}

const PokemonDataContext = createContext<PokemonDataContextType | undefined>(
  undefined
);

interface PokemonDataProviderProps {
  children: ReactNode;
}

export const PokemonDataProvider = ({ children }: PokemonDataProviderProps) => {
  const [allPokemons, setAllPokemons] = useState<PokemonDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await getAllPokemons();
        setAllPokemons(data);
      } catch (error) {
        console.error("Failed to fetch all Pokémon data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const value = { allPokemons, isLoading };

  return (
    <PokemonDataContext.Provider value={value}>
      {children}
    </PokemonDataContext.Provider>
  );
};

export const usePokemonData = () => {
  const context = useContext(PokemonDataContext);
  if (context === undefined) {
    throw new Error("usePokemonData must be used within a PokemonDataProvider");
  }
  return context;
};
