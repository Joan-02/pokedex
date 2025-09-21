import "./App.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { FavoritesProvider } from "./context/favoritesContext";
import { PokemonDataProvider } from "./context/pokemonDataContext";

export const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <>
      <PokemonDataProvider>
        <FavoritesProvider>
          <div className="outlet-container">
            <Outlet context={{ theme, toggleTheme }} />
          </div>
        </FavoritesProvider>
      </PokemonDataProvider>
    </>
  );
};
