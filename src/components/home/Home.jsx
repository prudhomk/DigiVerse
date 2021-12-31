/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styles from '../styles/Home.scss';

export default function Home() {

  const history = useHistory();

  const handleDigimon = () => {
    history.push('/digimons');
  };

  return (
    <div className={styles.home}>
      <h1>Welcome to the DigiVerse!</h1>
      <p>Utilize our API in your projects to include the vast assortment of Digimon</p>
      <p>Alternatively, checkout our DigiViewer to look through the catalog, or add additional Digimon!</p>
      <br></br>
      <h3>Enter the Digiverse</h3>
      <ArrowDownwardIcon className={styles.shake}/>
      <img onClick={handleDigimon} src="./digivice.webp"/>
    
    </div>
  );
}
