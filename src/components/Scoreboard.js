import React from 'react';

const Scoreboard = ({ score }) => {
  return (
    <div>
      <h2>Juego Terminado</h2>
      <h3>Tu puntuación es: {score}</h3>
    </div>
  );
};

export default Scoreboard;
