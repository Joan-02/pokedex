export type StatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

export const STAT_ABBREVIATIONS: { [key in StatName]: string } = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "Sp.Atk",
  "special-defense": "Sp.Def",
  speed: "SPD",
};

export const POKEMON_TYPE_COLORS: { [key: string]: string } = {
  normal: "rgb(168, 167, 122)",
  fire: "rgb(238, 129, 48)",
  water: "rgb(99, 144, 240)",
  electric: "rgb(247, 208, 44)",
  grass: "rgb(122, 199, 76)",
  ice: "rgb(150, 217, 214)",
  fighting: "rgb(194, 46, 40)",
  poison: "rgb(163, 62, 161)",
  ground: "rgb(226, 191, 101)",
  flying: "rgb(169, 143, 243)",
  psychic: "rgb(249, 85, 135)",
  bug: "rgb(166, 185, 26)",
  rock: "rgb(182, 161, 54)",
  ghost: "rgb(115, 87, 151)",
  dragon: "rgb(111, 53, 252)",
  dark: "rgb(112, 87, 70)",
  steel: "rgb(183, 183, 206)",
  fairy: "rgb(214, 133, 173)",
};

export const POKEMON_TYPES: string[] = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];
