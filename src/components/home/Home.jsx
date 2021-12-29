/* eslint-disable max-len */
import React from 'react';
import DigimonList from '../digimon/DigimonList';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the DigiVerse!</h1>
      <DigimonList/>
      <p>Utilize our API in your projects to include the vast assortment of Digimon</p>
      <p>Alternatively, checkout our DigiViewer to look through the catalog, or add additional Digimon!</p>
    </div>
  );
}
