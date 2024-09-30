import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'; // Importando o CSS para estilizar a página Quiz

const Quiz = () => {
  const quizzes = [
    { id: 1, title: 'Prova PMPE 2024', description: 'Responda a última prova da policia militar de Pernambuco.' },
    { id: 2, title: 'Prova PCPE 2024', description: 'Responda a última prova da policia militar de Pernambuco.' },
    { id: 3, title: 'Prova de História', description: 'Revise tópicos importantes da história do Brasil.' },
  ];

  return (
    <div className="quiz-container">
      <h1>Provas Disponíveis</h1>
      <div className="quiz-cards">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-card">
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
            <Link to={`/quiz/${quiz.id}`}>
              <button className="start-quiz-button">Começar Prova</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;