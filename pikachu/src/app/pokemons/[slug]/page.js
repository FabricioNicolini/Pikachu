'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import PokemonDetails from '@/app/components/pokemonDetails/pokemonDetails';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        setError(null);

        const selectedPokemon = pathname.split("/")[2]

        const url = "https://pokeapi.co/api/v2/pokemon/"
        const response = await fetch(url + selectedPokemon);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
        setError(error.message || 'Failed to fetch pokemons');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePokemonSelect = (pokemon) => {
    router.push(`/pokemons/${encodeURIComponent(pokemon.name)}`);
  };

  return (
    <div>
      <main>
        {loading ? (
          <div>Loading pokemons...</div>
        ) : error ? (
          <div>
            <p>Error: {error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        ) : (
          pokemon && 
          <PokemonDetails
            pokemon={pokemon}
          />
        )}
      </main>
    </div>
  );
}