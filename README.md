# Primeira Etapa
## Como criar um site em nextjs

![WireFrame](https://github.com/user-attachments/assets/a8fb9933-2e6a-413e-a7e8-252b59e0118c)

O projeto começou por essa imagem, um wireframe, que gera uma maior velocidade e facilidade para se iniciar qualquer projeto, afinal com ele pronto, não se demora tanto para criar o código enquanto pensa no resultado visual da página.

## Como iniciar seu projeto

para iniciar um projeto em next, se deve criar o arquivo do projeto, que é feito a partir de sintaxes específicas no terminal do seu aplicativo utilizado para programar, sendo assim, irei deixar o lik do site que explica quais códigos devem ser utilizados e sua ordem

Site:https://nextjs.org/docs/app/getting-started/installation

# Segunda Etapa 
## Principais Alterações e Adição de Responsividade 

![image](https://github.com/user-attachments/assets/cd2a298f-6009-4dd3-aed8-88edb885a50d)
![image](https://github.com/user-attachments/assets/1838b92c-b2e2-4882-8d54-b01cf5711d03) ![image](https://github.com/user-attachments/assets/b5a56909-a5e1-48ee-a523-d5fe7531d63a)


A página principal do site está desta forma por enquanto, já que a API que fornecerá o conteúdo ainda não foi integrada ao projeto. No entanto, seu modelo já está pronto e responsivo, tanto para desktop quanto para smartphones, como pode ser visto nas imagens.

## MainContent
O Main Content, como o nome já diz, será o conteúdo principal do site. Porém, como a API ainda não foi integrada, não há necessidade de se aprofundar em seu código e conteúdo por enquanto.

## SideBar 
A Sidebar é a aba lateral que tem a função de menu de navegação, e os códigos utilizados nela foram estes.
### JavasCript
```css 
import styles from './Sidebar.module.css';
const Sidebar = () => {
    return (
      <aside>
        <section>
          <article className={styles.logo}>
            LOGO
          </article>
          <article>
            <button className={styles.consoleUm}>
              Console 1
            </button>
            <button className={styles.consoleDois}>
              Console 2
            </button>
            <button className={styles.consoleTres}>
              Console 3
            </button>
          </article>
        </section>
        <section>
          <button  className={styles.registrar}>
            Registrar
          </button>
          <button className={styles.entrar}>
            Entrar
          </button>
        </section>
      </aside>
    );
  };
  
  export default Sidebar;
```
### Css
```css
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1.5rem;
}

.logo {
  background-color: #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.consoleUm, .consoleDois, .consoleTres, 
.registrar, .entrar {
  background-color: #aaa;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  width: 100%;
  margin-bottom: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.consoleUm:hover, .consoleDois:hover, .consoleTres:hover, 
.registrar:hover, .entrar:hover {
  background-color: #999;
  transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 768px) {
  .sidebar {
    padding: 1rem;
  }
  
  .logo {
    margin-bottom: 1rem;
  }
  
  .consoleUm, .consoleDois, .consoleTres, 
  .registrar, .entrar {
    padding: 0.6rem 0.8rem;
  }
}

@media (prefers-color-scheme: dark) {
  .consoleUm, .consoleDois, .consoleTres, 
  .registrar, .entrar {
    background-color: #444;
    color: #ededed;
  }
  
  .consoleUm:hover, .consoleDois:hover, .consoleTres:hover,  
  .registrar:hover, .entrar:hover {
    background-color: #555;
  }
}
```
## Page 
A Page é a parte do projeto que contém a maior quantidade de código, pois é nela que o site é estruturado, utilizando e organizando os components. Esta foi a parte que mais demandou trabalho até agora, já que foi onde desenvolvemos as principais funcionalidades do projeto, como, por exemplo, a responsividade e a personalização do site com CSS, além da montagem e manipulação dos components com JavaScript. Os códigos utilizados foram os seguintes:
### JavasCript 
```css
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
```
### Css 
```css
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
```

# Etapa Final
## Alterações Na Sidebar
A Sidebar agora não possui mais os botões de "Console", "Registrar" e "Entrar", contendo apenas a logo do site. Os seus códigos estão agora organizados da seguinte forma.
JavaScript
```css
import styles from './Sidebar.module.css';
import Image from 'next/image';

const Sidebar = () => {
    return (
      <aside className={styles.sidebar}>
        <section>
          <article className={styles.logo}>
            <Image 
            src="/pokemanos.png" 
            alt="Pokemanos Logo"
            width={200}
            height={100}
            priority
          />

          </article>
        </section>
      </aside>
    );
};
  
export default Sidebar;
```
Css
```css
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1.5rem;
}

.logo {
  background-color: #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Responsividade */
@media (max-width: 768px) {
  .sidebar {
    padding: 1rem;
  }
  
  .logo {
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
}
```

## Principais Alterações
As principais alterações são devidas à adição da API, que agora é o conteúdo principal. Ela está localizada na pasta "pokemon" e trabalha diretamente com um novo componente, o PokemonDetails, que exibe aleatoriamente vários tipos diferentes de pokémons, suas principais características e seus respectivos códigos, que estão organizados da seguinte forma.
#### JavaScript:pokemon/pages
```css
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
```
#### gobals.css
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: var(--foreground);
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
```
#### JavaScript:PokemonDetails
```css
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
```
#### PokemonDetails.module.css
```css
.main {
  padding: 2rem;
}
```
#### pages.js
```css
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
```
#### page.module.css
```css
.page {
  --gray-rgb: 0, 0, 0;
  --gray-alpha-200: rgba(var(--gray-rgb), 0.08);
  --gray-alpha-100: rgba(var(--gray-rgb), 0.05);
  --button-primary-hover: #383838;
  --button-secondary-hover: #f2f2f2;

  display: grid;
  grid-template-columns: 1fr 250px;
  min-height: 100svh;
  font-family: var(--font-geist-sans);
}

.main {
  grid-column: 1;
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.sidebarContainer {
  grid-column: 2;
  background-color: #f0f0f0;
  position: sticky;
  top: 0;
  height: 100svh;
  overflow-y: auto;
}

.mobileMenuButton {
  display: none;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  background: #aaa;
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.25rem;
}

/* Responsividade */
@media (max-width: 1024px) {
  .page {
    grid-template-columns: 1fr 220px;
  }
  
  .main {
    padding: 60px;
  }
}

@media (max-width: 768px) {
  .page {
    grid-template-columns: 1fr;
  }
  
  .main {
    padding: 32px;
    padding-bottom: 80px;
    align-items: center;
  }
  
  .sidebarContainer {
    position: fixed;
    top: 0;
    right: -100%;
    width: 85%;
    max-width: 300px;
    height: 100svh;
    transition: right 0.3s ease-in-out;
    z-index: 999;
  }
  
  .sidebarOpen {
    right: 0;
  }
  
  .mobileMenuButton {
    display: block;
  }
}

@media (max-width: 480px) {
  .main {
    padding: 20px;
  }
  
  .sidebarContainer {
    width: 90%;
  }
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .page {
    --gray-rgb: 255, 255, 255;
    --gray-alpha-200: rgba(var(--gray-rgb), 0.145);
    --gray-alpha-100: rgba(var(--gray-rgb), 0.06);
    --button-primary-hover: #ccc;
    --button-secondary-hover: #1a1a1a;
  }
  
  .sidebarContainer {
    background-color: #1a1a1a;
  }
  
  .logo {
    filter: invert();
  }
}
```
E a página principal está desta forma. 


![image](https://github.com/user-attachments/assets/0d956751-8058-429b-b2e6-fecf017ea564)


E, quando um Pokémon é selecionado, suas principais características são mostradas desta forma.


![image](https://github.com/user-attachments/assets/e4394465-d14d-4d5c-bdda-3bfc102b627d) ![image](https://github.com/user-attachments/assets/137c1472-e07e-450a-98dc-825dad7378f7) ![image](https://github.com/user-attachments/assets/50cbd714-e067-4b72-bbd0-ba6ed765541b)






