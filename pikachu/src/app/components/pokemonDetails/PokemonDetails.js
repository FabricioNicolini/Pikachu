'use client';
import styles from './PokemonDetails.module.css';
import React from 'react';

const PokemonDetails = ({ pokemon }) => {
  return (
    <div className={styles.main}>
      <h1>{pokemon.name}</h1>
      <div>
        <div
          key={pokemon.name}
        >
          <img src={pokemon.sprites.front_default} />
          <h2>{pokemon.name}</h2>
          <h3>Tipos</h3>
          {pokemon.types.map(typeObj => (
            <p>{typeObj.type.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;