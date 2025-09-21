import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

//Lo que el proveedor da a sus hijos
interface FavoritesContextType {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

//Lo que el proveedor recibe de su padre
interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (pokemonId: number) => {
    console.log(`3. FavoritesContext: Recibido toggle para ID ${pokemonId}.`);

    setFavorites((currentSelectedLike) => {
      if (currentSelectedLike.includes(pokemonId)) {
        return currentSelectedLike.filter((id) => id !== pokemonId);
      } else {
        return [...currentSelectedLike, pokemonId];
      }
    });
  };

  const value = { favorites, toggleFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
