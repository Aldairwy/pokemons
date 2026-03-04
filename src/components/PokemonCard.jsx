function PokemonCard({ pokemon, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <span className="pokemon-id">#{pokemon.id}</span>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <h3>{pokemon.name}</h3>

      <div>
        {pokemon.types.map((typeInfo) => (
          <span
            key={typeInfo.type.name}
            className="type-badge"
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;