import classNames from 'classnames';
import styles from './MainContent.module.css';
import React from 'react';

const MainContent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.um}></div>
      <div className={styles.dois}></div>
    </div>
  );
};

export default MainContent;