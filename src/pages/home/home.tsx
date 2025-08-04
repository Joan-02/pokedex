import "./home.css";
import { Card } from "../../components/card/card";
import pokeball_header from "../../img/pokeball_header.svg";
import { useState, useEffect } from "react";
import { getPokemons } from "../../services/api";
import type { PokemonListItem } from "../../types/pokemon";

export const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);

  useEffect(() => {
    const fetchInitialPokemons = async () => {
      try {
        const data = await getPokemons(20, 0);
        setPokemons(data.results);
      } catch (error) {
        console.error("Failed to fetch pokemons", error);
      }
    };
    fetchInitialPokemons();
  }, []);

  return (
    <main className="home-container">
      <header className="header">
        <img src={pokeball_header} alt="" />
      </header>
      <div className="controls-container">
        <div className="searchbar-wrapper">
          <input
            className="searchbar"
            id="search-input"
            type="search"
            placeholder="Search by name..."
          />
        </div>
        <div className="filter-buttons-wrapper">
          <button className="button-container">
            <span>Favorites</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.06634 12.3667L7.99967 12.4333L7.92634 12.3667C4.75967 9.49333 2.66634 7.59333 2.66634 5.66667C2.66634 4.33333 3.66634 3.33333 4.99967 3.33333C6.02634 3.33333 7.02634 4 7.37967 4.90667H8.61967C8.97301 4 9.97301 3.33333 10.9997 3.33333C12.333 3.33333 13.333 4.33333 13.333 5.66667C13.333 7.59333 11.2397 9.49333 8.06634 12.3667ZM10.9997 2C9.83967 2 8.72634 2.54 7.99967 3.38667C7.27301 2.54 6.15967 2 4.99967 2C2.94634 2 1.33301 3.60667 1.33301 5.66667C1.33301 8.18 3.59967 10.24 7.03301 13.3533L7.99967 14.2333L8.96634 13.3533C12.3997 10.24 14.6663 8.18 14.6663 5.66667C14.6663 3.60667 13.053 2 10.9997 2Z"
                fill="#111827"
              />
            </svg>
          </button>
          <button className="button-container">
            <span>Filters</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.0002 13.2533C10.0269 13.4533 9.96023 13.6667 9.8069 13.8067C9.5469 14.0667 9.1269 14.0667 8.8669 13.8067L6.19356 11.1333C6.04023 10.98 5.97356 10.7733 6.00023 10.58V7.16667L2.8069 3.08C2.58023 2.79333 2.63356 2.37333 2.92023 2.14667C3.0469 2.05333 3.1869 2 3.33356 2H12.6669C12.8136 2 12.9536 2.05333 13.0802 2.14667C13.3669 2.37333 13.4202 2.79333 13.1936 3.08L10.0002 7.16667V13.2533ZM4.69356 3.33333L7.33356 6.70667V10.3867L8.6669 11.72V6.7L11.3069 3.33333H4.69356Z"
                fill="#111827"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid-container">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemonData={pokemon} />
        ))}
      </div>
    </main>
  );
};
