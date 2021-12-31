/* eslint-disable max-len */
import React from 'react';
import styles from '../components/styles/Home.scss';

export default function Loader() {

  const loaders = ['whip.gif', 'dizzy.gif', 'crying.gif', 'blinking.gif', 'spinning.gif'];
  const randomNum = Math.floor(Math.random() * loaders.length);
  const randomLoader = () => {
    const chosenGif = './' + loaders[randomNum];
    console.log(chosenGif);
    return chosenGif;
  };

  return (
    <div className={styles.loader}>
      <img src={randomLoader()} alt="loader"/>
    </div>
  );
}
