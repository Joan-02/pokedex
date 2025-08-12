//Function to split the url and filter the empty parts
export const getPokemonIdFromUrl = (url: string): string => {
  const parts = url.split("/").filter((part) => part);
  return parts[parts.length - 1];
};

//Function to add the id to the URL
export const getPokemonImageUrl = (id: string | number): string => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return imageUrl;
};
