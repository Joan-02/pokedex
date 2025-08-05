import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
// import { PokemonInfo } from "./pages/pokemonInfo/pokemonInfo";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/pokemon/:id" element={<PokemonInfo />} /> */}
    </Routes>
  );
};
