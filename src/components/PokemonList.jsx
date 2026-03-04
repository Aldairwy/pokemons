import { useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons }) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <>
      <div className="grid">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => setSelectedPokemon(pokemon)}
          />
        ))}
      </div>

      {/* Modal único */}
      {selectedPokemon && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedPokemon(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedPokemon.name}</h2>
            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
            />

            <p><strong>Altura:</strong> {selectedPokemon.height}</p>
            <p><strong>Peso:</strong> {selectedPokemon.weight}</p>

            <h4>Estadísticas</h4>
            {selectedPokemon.stats.map((stat) => (
              <p key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}

            <button onClick={() => setSelectedPokemon(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonList;