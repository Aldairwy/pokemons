export const getPokemons = async () => {
  console.log("Entrando a getPokemons");

  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const data = await response.json();

  console.log("Lista básica:", data);

  const detailedPokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return await res.json();
    })
  );

  console.log("Detalles:", detailedPokemons);

  return detailedPokemons;
};