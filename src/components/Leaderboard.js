import React from 'react';

const Leaderboard = ({ players }) => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name}: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
