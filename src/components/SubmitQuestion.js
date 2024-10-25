import React, { useState } from 'react';

const SubmitQuestion = ({ onSubmit }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      question: newQuestion,
      options,
      correct: correctIndex
    });
    setNewQuestion('');
    setOptions(['', '', '']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Pregunta:</label>
        <input value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
      </div>
      <div>
        {options.map((opt, idx) => (
          <input key={idx} value={opt} onChange={(e) => {
            const newOptions = [...options];
            newOptions[idx] = e.target.value;
            setOptions(newOptions);
          }} />
        ))}
      </div>
      <div>
        <label>Índice de la opción correcta:</label>
        <input type="number" value={correctIndex} onChange={(e) => setCorrectIndex(Number(e.target.value))} />
      </div>
      <button type="submit">Enviar pregunta</button>
    </form>
  );
};

export default SubmitQuestion;
