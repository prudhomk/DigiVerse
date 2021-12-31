import React from 'react';
import { useHistory } from 'react-router';
import styles from '../styles/Home.scss';

export default function Header() {

  const history = useHistory();

  const handleHome = () => {
    history.push('/');
  };

  return (
    <div className={styles.header}>
      <img className={styles.logo} onClick={handleHome} src="./logo.png"/>
    </div>
  );
}
