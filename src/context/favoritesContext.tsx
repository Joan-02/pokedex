import { createContext, useState, useContext } from "react";
import type { PokemonDetails } from "../types/types";

// Definimos qué tendrá el contexto
interface FavoritesContextType {
  favorites: PokemonDetails[]; // Lista de favoritos
  toggleFavorite: (pokemon: PokemonDetails) => void; // Función para añadir/quitar favoritos
}

// Creamos el contexto
const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

// Creamos el proveedor
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<PokemonDetails[]>(() => {
    // Cargar favoritos desde localStorage al iniciar
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (pokemon: PokemonDetails) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === pokemon.id);
      const updated = exists
        ? prev.filter((p) => p.id !== pokemon.id)
        : [...prev, pokemon];
      localStorage.setItem("favorites", JSON.stringify(updated)); // Guardar en localStorage
      return updated;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook para usar el contexto fácilmente
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error("useFavorites must be used within a FavoritesProvider");
  return context;
};
