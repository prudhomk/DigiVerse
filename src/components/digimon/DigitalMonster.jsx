import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/lists.scss';

export default function DigitalMonster({ id, name, image, level, attribute }) {
  return (
    <>
      <Link to={`/digimon/${id}`}>
        <div className={styles.digimon}>
          <p>Name: {name}</p>
          <img src={`./assets/${image}`}/>
          <p>Level: {level}</p>
          <p>Attribute: {attribute}</p>
        </div>
      </Link>
    </>
  );
}
