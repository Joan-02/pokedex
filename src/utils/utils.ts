//Function to add the id to the URL
export const getPokemonImageUrl = (id: string | number): string => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return imageUrl;
};
