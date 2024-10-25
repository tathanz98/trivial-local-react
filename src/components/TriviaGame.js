import React, { useState } from 'react';
import '../components/TriviaGame.css';

const TriviaGame = () => {
    const [questions, setQuestions] = useState([
        {
            question: "¿Cuál es la capital de Francia?",
            options: ["Berlín", "Madrid", "París", "Roma"],
            answer: "París",
        },
        {
            question: "¿Cuál es el río más largo del mundo?",
            options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
            answer: "Amazonas",
        },
        {
            question: "¿Quién pintó la Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Salvador Dalí"],
            answer: "Leonardo da Vinci",
        },
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
    const [selectedOption, setSelectedOption] = useState(null); 
    const [isCorrect, setIsCorrect] = useState(null); 

  
    const handleOptionClick = (option) => {
        const correctAnswer = questions[currentQuestionIndex].answer;
        setSelectedOption(option);
        setIsCorrect(option === correctAnswer);

        
        setTimeout(() => {
            setSelectedOption(null);
            setIsCorrect(null); 
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1); 
            } else {
                alert("¡Felicidades, has completado la trivia!");
                setCurrentQuestionIndex(0); 
            }
        }, 1500); 
    };

    return (
        <div className="trivia-container">
            <h2>Trivia Game</h2>
            <div>
                <p className="question">{questions[currentQuestionIndex].question}</p>
                <ul className="options">
                    {questions[currentQuestionIndex].options.map((option, i) => (
                        <li key={i}>
                            <button
                                className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                                onClick={() => handleOptionClick(option)} 
                                disabled={selectedOption !== null} 
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Mostrar si la respuesta fue correcta o incorrecta */}
                {selectedOption && (
                    <p className="result">
                        {isCorrect ? '¡Correcto!' : 'Incorrecto, la respuesta es ' + questions[currentQuestionIndex].answer}
                    </p>
                )}
            </div>
            <footer>
                <p>¡Diviértete jugando!</p>
            </footer>
        </div>
    );
};

export default TriviaGame;
