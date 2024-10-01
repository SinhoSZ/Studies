import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './QuizPage.css'; // Importando os estilos

const QuizPage = () => {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const quizzes = {
    1: [
      { question: "Qual é a capital de Pernambuco?", options: ["Recife", "Olinda", "Jaboatão"], answer: "Recife" },
      { question: "Qual é a capital do Brasil?", options: ["Brasília", "Rio de Janeiro", "São Paulo"], answer: "Brasília" },
    ],
    // Adicione mais perguntas conforme necessário
  };

  const currentQuiz = quizzes[id];

  if (!currentQuiz) {
    return <h2>Quiz não encontrado!</h2>;
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const currentQuestion = currentQuiz[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setCorrectAnswers(correctAnswers + 1);
      setResultMessage('Você acertou!');
    } else {
      setResultMessage('Você errou!');
    }

    // Adiciona um delay antes de ir para a próxima pergunta
    setTimeout(() => {
      if (currentQuestionIndex < currentQuiz.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null); // Limpa a seleção para a próxima pergunta
        setResultMessage(''); // Limpa a mensagem de resultado
      } else {
        setShowResult(true); // Exibe o resultado final
      }
    }, 1000); // 1 segundos de delay
  };

  return (
    <div className="quiz-page">
      <h1>Quiz {id}</h1>
      {!showResult ? (
        <div className="quiz-question">
          <h3>{currentQuiz[currentQuestionIndex].question}</h3>
          <ul>
            {currentQuiz[currentQuestionIndex].options.map((option, i) => (
              <li 
                key={i} 
                onClick={() => handleOptionSelect(option)} 
                style={{ backgroundColor: selectedOption === option ? '#b3e0ff' : '#e6f7ff' }}
              >
                {option}
              </li>
            ))}
          </ul>
          <button 
            onClick={handleSubmit} 
            className="submit-button"
            disabled={!selectedOption}
          >
            Responder
          </button>
          {resultMessage && <p>{resultMessage}</p>}
        </div>
      ) : (
        <div className="result">
          <h2>Resultado Final</h2>
          <p>Você acertou {correctAnswers} de {currentQuiz.length} perguntas!</p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
