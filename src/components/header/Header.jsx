import React from 'react';
import styles from '../styles/Home.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="./logo.png"/>
    </div>
  );
}
