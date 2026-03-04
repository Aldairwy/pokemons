
import PokemonList from "./components/PokemonList";
import { useEffect, useState } from "react";
import { getPokemons } from "./services/api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemons();
        setPokemons(data);
      } catch (error) {
        console.error("Error al traer los pokemons", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

return (
  <div className="app-container">
    <h1 className="title">Pokédex</h1>
    {loading ? (
      <p className="loading">Cargando...</p>
    ) : (
      <PokemonList pokemons={pokemons} />
    )}
  </div>
);
}

export default App;