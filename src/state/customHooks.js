import { useEffect, useState } from 'react';
import { fetchDigimons, fetchDigitalMonster } from '../services/dapi.js';

export const useDigimons = (page) => {
  const [digimons, setDigimons] = useState([]);
  const [digiLength, setDigiLength] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(async () => {

    const res = await fetchDigimons();
    
    setDigiLength(res.length);
    setDigimons(res);
    setLoader(false);
    
  }, [page, loader]);
  
  return { digimons, digiLength, loader };
};

export const useDigitalMonster = (id) => {
  const [digitalMonster, setDigitalMonster] = useState({});

  useEffect(() => {
    fetchDigitalMonster(id)
      .then(setDigitalMonster);
  }, [id]);

  return digitalMonster;
};

