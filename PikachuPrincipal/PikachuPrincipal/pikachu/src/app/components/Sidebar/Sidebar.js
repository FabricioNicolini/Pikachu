import classNames from 'classnames';
import styles from './Sidebar.module.css';
const Sidebar = () => {
    return (
      <div>
        <div>
          <div className={styles.logo}>
            LOGO
          </div>
          <div>
            <button className={styles.consoleUm}>
              Console 1
            </button>
            <button className={styles.consoleDois}>
              Console 2
            </button>
            <button className={styles.consoleTres}>
              Console 3
            </button>
          </div>
        </div>
        <div>
          <button  className={styles.registrar}>
            Registrar
          </button>
          <button className={styles.entrar}>
            Entrar
          </button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;