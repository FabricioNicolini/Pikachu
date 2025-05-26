'use client';
import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const router = useRouter();

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
        let url = "https://pokeapi.co/api/v2/pokemon/"
        for(let i = 0; i < 2; i++){
          const randomIndex = Math.floor(Math.random()*1000)
          const response = await fetch(url + randomIndex);
          const data = await response.json();
          setPokemons(currentPokemons => [...currentPokemons, data])
        }
      } catch (error) {
        console.error("Error fetching pokemons:", error);
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
    <div className={styles.page}>
      <main className={styles.main}>
        <MainContent 
          pokemons={pokemons}
          onPokemonSelect={handlePokemonSelect} 
        />
      </main>
      
      {isMobile && (
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
      )}
      
      <aside 
        className={`${styles.sidebarContainer} ${sidebarOpen ? styles.sidebarOpen : ''}`}
        aria-hidden={isMobile && !sidebarOpen}
      >
        <Sidebar />
        {isMobile && (
          <button 
            onClick={toggleSidebar}
            style={{
              margin: '1rem',
              padding: '0.75rem',
              background: '#aaa',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            Fechar Menu
          </button>
        )}
      </aside>
    </div>
  );
}