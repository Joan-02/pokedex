import "./home.css";
import { Card } from "../../components/card/card";
import { Header } from "../../components/header/header";
import { FiltersModal } from "../../components/filtersModal/filtersModal";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getPokemons, getPokemonDetails } from "../../services/api";
import type { PokemonDetails } from "../../types/types";

export const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const POKEMONS_PER_PAGE = 21;
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState<number[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      const offset = (currentPage - 1) * POKEMONS_PER_PAGE;

      const listData = await getPokemons(POKEMONS_PER_PAGE, offset);

      const detailPromises = listData.results.map((pokemon) => {
        return getPokemonDetails(pokemon.name);
      });
      const pokemonDetailsData = await Promise.all(detailPromises);

      setPokemons(pokemonDetailsData);

      if (totalPages === 0) {
        const total = Math.ceil(listData.count / POKEMONS_PER_PAGE);
        setTotalPages(total);
      }
    };

    fetchPokemons();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    setSearchParams({ page: String(newPage) });
  };

  const handleApplyFilters = (selectedTypes: string[]) => {
    setActiveFilters(selectedTypes);
  };

  const handleToggleFavorite = (pokemonId: number) => {
    setIsFavorite((currentSelectedLike) => {
      if (currentSelectedLike.includes(pokemonId)) {
        return currentSelectedLike.filter((id) => id !== pokemonId);
      } else {
        return [...currentSelectedLike, pokemonId];
      }
    });
  };

  let pokemonsToDisplay = pokemons;

  if (showOnlyFavorites) {
    pokemonsToDisplay = pokemonsToDisplay.filter((pokemon) =>
      isFavorite.includes(pokemon.id)
    );
  }

  if (activeFilters.length > 0) {
    pokemonsToDisplay = pokemonsToDisplay.filter((pokemon) => {
      const pokemonTypes = pokemon.types.map((typeInfo) => typeInfo.type.name);
      return activeFilters.some((filter) => pokemonTypes.includes(filter));
    });
  }

  return (
    <main className="home-container">
      <Header />
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
          <button
            className="button-container"
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
          >
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
          <button
            className="button-container"
            onClick={() => {
              console.log("¡El botón de filtros fue clickeado!");
              setIsFilterModalOpen(true);
            }}
          >
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
        {pokemonsToDisplay.length === 0 ? (
          <div className="empty-state-message">
            <p>No Pokémon match your criteria.</p>
            <p>Try clearing the filters or adding some favorites!</p>
          </div>
        ) : (
          pokemonsToDisplay.map((pokemon) => (
            <Card
              key={pokemon.id}
              pokemonData={pokemon}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={isFavorite.includes(pokemon.id)}
            />
          ))
        )}
      </div>
      <div className="pagination-controls">
        <button
          className="arrow-pagination"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M20.0006 10.1109V14.1109H11.0006L14.5006 17.6109L12.0806 20.0309L4.16064 12.1109L12.0806 4.19092L14.5006 6.61092L11.0006 10.1109H20.0006Z"
              fill="black"
            />
          </svg>
        </button>
        <span className="actual-page">Página {currentPage}</span>
        <button
          className="arrow-pagination"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M4.00033 14.1108L4.00033 10.1108L13.0003 10.1108L9.50033 6.61076L11.9203 4.19076L19.8403 12.1108L11.9203 20.0308L9.50033 17.6108L13.0003 14.1108L4.00033 14.1108Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      {isFilterModalOpen && (
        <FiltersModal
          onClose={() => setIsFilterModalOpen(false)}
          onApplyFilters={handleApplyFilters}
          initialSelectedTypes={activeFilters}
        />
      )}
    </main>
  );
};
