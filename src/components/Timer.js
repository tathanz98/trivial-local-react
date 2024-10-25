import React, { useState, useEffect } from 'react';

const Timer = ({ duration = 10, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onTimeUp();  
    }
  }, [timeLeft]);

  return (
    <div>
      <h3>Tiempo restante: {timeLeft} segundos</h3>
    </div>
  );
};

export default Timer;
