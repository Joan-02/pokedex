import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { PokemonInfo } from "./pages/pokemonInfo/pokemonInfo.tsx";
import { Home } from "./pages/home/home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonInfo />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
