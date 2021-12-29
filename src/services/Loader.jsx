/* eslint-disable max-len */
import React from 'react';

export default function Loader() {

  const loaders = ['whip.gif', 'dizzy.gif', 'gun.gif', 'salt.gif', 'crying.gif', 'blinking.gif', 'spinning.gif'];
  const randomNum = Math.floor(Math.random() * loaders.length);
  const randomLoader = () => {
    return '../../public/loaders/' + loaders[randomNum].gif;
  };

  return (
    <div>
      <img src={randomLoader()} alt="loader"/>
    </div>
  );
}
