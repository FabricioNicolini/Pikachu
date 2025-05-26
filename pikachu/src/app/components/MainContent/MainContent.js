'use client';
import styles from './MainContent.module.css';
import React from 'react';

const MainContent = ({ pokemons, onPokemonSelect }) => {
  return (
    <div className={styles.main}>
      <h1>Pokemons</h1>
      <div className={styles.pokemonsGrid}>
        {pokemons.map(pokemon => (
          <div 
            key={pokemon.name} 
            className={styles.pokemonCard}
            onClick={() => onPokemonSelect(pokemon)}
          >
            <img src={pokemon.sprites.front_default}/>
            <h2>{pokemon.name}</h2>
            {}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;