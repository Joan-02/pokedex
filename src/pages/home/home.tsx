import "./home.css";
import { Card } from "../../components/card/card";
import pokeball_header from "../../img/pokeball_header.svg";

export const Home = () => {
  return (
    <div>
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
        {/* <div className="filter-buttons-wrapper">
          <button>Filtros</button>
          <button>Favoritos</button>
        </div> */}
      </div>
      <div className="grid-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
