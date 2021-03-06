import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDigitalMonster } from '../../state/customHooks.js';
import styles from '../styles/lists.scss';

export default function DigimonDetail() {
  const { id } = useParams();
  const digitalMonster = useDigitalMonster(id);
  const history = useHistory();

  const handleReturn = () => {
    history.push('/digimons');
  };

  return (
    <div className={styles.details}>
      <div>
        <img src={`/assets/${digitalMonster.image}`}/>
        <div>
          <h1>{digitalMonster.name}</h1>
          <p>Series: {digitalMonster.series}</p>
          <p>Level: {digitalMonster.level}</p>
          <p>Attribute: {digitalMonster.attribute}</p>
          <p>Type: {digitalMonster.type}</p>
          <p>Can Digivolve: {JSON.stringify(digitalMonster.canDigivolve)}</p>
          <p>Tamer: {digitalMonster.tamer}</p>

          <div className={styles.return}>
            <button onClick={handleReturn}>Return to previous page</button>
          </div>
        </div>
      </div>
    </div>
  );
}
