/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';


export default function Home() {

  const history = useHistory();

  const handleDigimon = () => {
    history.push('/digimon');
  };

  return (
    <div>
      <h1>Welcome to the DigiVerse!</h1>
      <p>Utilize our API in your projects to include the vast assortment of Digimon</p>
      <p>Alternatively, checkout our DigiViewer to look through the catalog, or add additional Digimon!</p>
      <button onClick={handleDigimon}>DigiViewer</button>
    </div>
  );
}
