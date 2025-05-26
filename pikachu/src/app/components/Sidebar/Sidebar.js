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