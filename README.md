# Primeira Etapa
## Como criar um site em nextjs

![WireFrame](https://github.com/user-attachments/assets/a8fb9933-2e6a-413e-a7e8-252b59e0118c)

O projeto começou por essa imagem, um wireframe, que gera uma maior velocidade e facilidade para se iniciar qualquer projeto, afinal com ele pronto, não se demora tanto para criar o código enquanto pensa no resultado visual da página.

# Como iniciar seu projeto

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
A page é a parte do projeto que terá a maior quantidade de código, pois é nela que o site é montado, utilizando e organizando os components. Esta foi a parte que mais deu trabalho até agora, já que foi onde desenvolvemos as principais funcionalidades do projeto, como, por exemplo, a responsividade e personalização do site com CSS, além da montagem e manipulação dos components com JavaScript. Os códigos utilizados foram os seguintes:
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
