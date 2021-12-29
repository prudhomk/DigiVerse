import { useEffect, useState } from 'react';
import { fetchDigimon, fetchDigitalMonster } from '../services/dapi.js';

export const useDigimon = (page) => {
  const [digimon, setDigimon] = useState([]);
  const [digiLength, setDigiLength] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(async () => {
    const res = await fetchDigimon(page);
    setDigiLength(res.length);
    setDigimon(res.slice((page - 1) * 5, page * 5));
    setLoader(false);
  }, [page, loader]);
  
  return { digimon, digiLength, loader };
};

export const useDigitalMonster = (id) => {
  const [digitalMonster, setDigitalMonster] = useState({});

  useEffect(() => {
    fetchDigitalMonster(id)
      .then(setDigitalMonster);
  }, [id]);

  return digitalMonster;
};

