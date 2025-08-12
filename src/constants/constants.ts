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
