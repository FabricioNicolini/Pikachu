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