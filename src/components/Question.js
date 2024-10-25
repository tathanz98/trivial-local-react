import React, { useState } from 'react';
import Question from './Question';

const TriviaGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  
  
  const questions = [
    { id: 1, text: '¿Cuál es la capital de Francia?' },
    { id: 2, text: '¿Qué es la fotosíntesis?' },
    // Otras preguntas...
  ];

  // Cambia la pregunta actual por ejemplo
  const loadQuestion = (index) => {
    setCurrentQuestion(questions[index]);
  };

  return (
    <div>
      <button onClick={() => loadQuestion(0)}>Cargar Pregunta 1</button>
      <Question question={currentQuestion} />
    </div>
  );
};

export default TriviaGame;
