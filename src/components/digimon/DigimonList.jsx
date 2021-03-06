import React, { useState } from 'react';
import { useDigimons } from '../../state/customHooks';
import DigitalMonster from './DigitalMonster';
import Loader from '../../services/Loader';
import styles from '../styles/lists.scss';

const DigimonList = () => {
  const [page, setPage] = useState(1);
  const { digimons, digiLength, loader } = useDigimons();
 
  
  const digimonElements = digimons.map(digi => (
    <li key={digi.id}>
      <DigitalMonster {...digi}/>
    </li>
  ));

  return (

    <>
      {
        loader ? <Loader/> :
          <div className={styles.container}>
            <h1>Digimon</h1>
            <ul className={styles.list}>{digimonElements}</ul>
            {/* <div className={styles.page}>
              <button
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}
              > Previous
              </button>
              <p>Page {page}</p>
              <button
                disabled={page >= (digiLength / 10)}
                onClick={() => setPage(page + 1)}
              > Next 
              </button>
            </div> */}
          </div>
      }
    </>
  );
};

export default DigimonList;
