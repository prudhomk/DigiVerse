export const fetchDigimon = async () => {
  const res = await fetch(`${process.env.API}/api/v1/digimon`);
  const digimon = await res.json();
  
  return digimon;
};

export const fetchDigitalMonster = async (id) => {
  const res = await fetch(`${process.env.API}/api/v1/digimon/${id}`);
  const digitalMonster = await res.json();

  return digitalMonster;
};

export const createItem = async (digitalMonster) => {
  const res = await fetch(`${process.env.API}/api/v1/digimon`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(digitalMonster)
  });

  const newItem = await res.json();
  return newItem;
};

export const editItem = async (item, id) => {
  const res = await fetch(`${process.env.API}/api/v1/digimon/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(item, id)
  });

  const editItem = await res.json();
  return editItem;
};

export const deleteItem = async (id) => {
  const res = await fetch(`${process.env.API}/api/v1/digimon/${id}`, {
    method: 'DELETE'
  });

  if(res.status === 200) alert('Item deleted');
};
