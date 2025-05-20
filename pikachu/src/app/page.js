'use client'; // Adicione esta diretiva no topo do arquivo

import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainContent />
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