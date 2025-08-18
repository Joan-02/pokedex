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
  normal: "rgba(168, 167, 122, 0.5)",
  fire: "rgba(238, 129, 48, 0.5)",
  water: "rgba(99, 144, 240, 0.5)",
  electric: "rgba(247, 208, 44, 0.5)",
  grass: "rgba(122, 199, 76, 0.5)",
  ice: "rgba(150, 217, 214, 0.5)",
  fighting: "rgba(194, 46, 40, 0.5)",
  poison: "rgba(163, 62, 161, 0.5)",
  ground: "rgba(226, 191, 101, 0.5)",
  flying: "rgba(169, 143, 243, 0.5)",
  psychic: "rgba(249, 85, 135, 0.5)",
  bug: "rgba(166, 185, 26, 0.5)",
  rock: "rgba(182, 161, 54, 0.5)",
  ghost: "rgba(115, 87, 151, 0.5)",
  dragon: "rgba(111, 53, 252, 0.5)",
  dark: "rgba(112, 87, 70, 0.5)",
  steel: "rgba(183, 183, 206, 0.5)",
  fairy: "rgba(214, 133, 173, 0.5)",
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
