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
  const [submitted, setSubmitted] = useState(false);

  const quizzes = {
    1: [
      { question: "Assinale a alternativa que apresenta corretamente aspectos relacionados à 'Guerra dos Mascates'.", options: ["A guerra dos Mascates foi um dos grandes conflitos envolvendo holandeses e portugueses. Esse evento está relacionado à parte final da presença holandesa  em Pernambuco e foi um conflito decisivo para a sua expulsão.", "Foi um conflito que ocorreu durante o período regencial e esteve ligado a ideias republicanas e liberais. Na época, a elite pernambucana estava descontente com a forma como o governo imperial estava tratando os negócios locais, com aumento de impostos.", "Foi um conflito relacionado à queda do açúcar brasileiro no começo do século XVIII e, consequentemente, da elite açucareira de Pernambuco, que estava localizada em Olinda, havendo um certo crescimento e prestígio do comércio realizado por lusos em Recife, os quis, inclusive, realizavam empréstimos aos senhores de engenho de Olinda.", "Foi um episódio de confromto armado que ocorreu em 1930 e envolveu um grupo a favor da tomada do poder por Getúlio Vargas e outro grupo que era contrário.", "Refere-se ao conflito, que ocorreu no contexto da Primeira República, entre grupos, aquele a favor da permanência de josé Rufino no poder estadual e o que desejava mudanças no panorama político da região."], answer: "C" },
      { question: "Assinale a alternativa que apresenta aspectos referentes ao evento histórico denominado 'Confederação do Equador'.", options: ["Movimento que ocorreu no começo do Primeiro Reinado, em 1824, e que, entre outros pontos, possuía um caráter republicano e contrário à monarquia.", "Movimento que ocorreu no fim da década de 1960 que buscou combater o regime ditatorial civil-militar.", "Foi uma rebelião que aconteceu no período regencial do império e na qual, entre os objetivos dos revoltosos, estava a exigência da coroação imediata de Pedro II.", "Refere-se à revolta que ocorreu na cidade de Olinda, no século XVIII, contrária à elevação de Recife como centro da cpitania de Pernambuco.", "Ocorreu já no fim do período imperial e foi uma revolta que tinha como um dos propósitos a instauração da República no Brasil."], answer: "A" },
      { question: "Assinale a alternativa que NÃO corresponde a um patrimônio imaterial de Pernambuco registrado pelo IPHAN.", options: ["Maracatu Nação.", "Feira de Caruaru.", "Cavalo-Marinho.", "Ofício das paneleiras de goiabeiras.", "Frevo."], answer: "D" },
      { question: "A invasão holandesa na região Nordeste e evidentemente em Pernambuco está relacionada, entre outros pontos, aos interesses comerciais da", options: ["Companhia das Índias Continentais.", "Companhia das Índias Americanas.", "Companhia das Índias Meridionais.", "Companhia das Índias Ocidentais.", "Companhias das Índias Orientais."], answer: "D"},
      { question: "Assinale a alternativa que NÃO corresponde a aspectos gerais dos quilombos do período colonial brasileiro.", options: ["Os quilombos foram formados principalmente no intuito de realizar ritos religiosos.", "Constituíram lugares de proteção contra os abusos de senhores.", "Ainda que poucos, havia outros grupos além de africanos escravizados.", "Também eram espaços de resistência cultural.", " Havia uma espécie de hierarquia social nos quilombos."], answer: "A" },
    ],
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
    const correctAnswerLetter = currentQuestion.answer;

    // Verifica se a letra da opção selecionada é igual à resposta correta
    if (selectedOption === correctAnswerLetter) {
      setCorrectAnswers(correctAnswers + 1);
      setResultMessage('Você acertou!');
    } else {
      setResultMessage('Você errou!');
    }
    setSubmitted(true);

    setTimeout(() => {
      if (currentQuestionIndex < currentQuiz.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setResultMessage('');
        setSubmitted(false);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className="quiz-page">
      <h1>Quiz {id}</h1>
      {!showResult ? (
        <div className="quiz-question">
          <h3>{currentQuiz[currentQuestionIndex].question}</h3>
          <ul>
            {currentQuiz[currentQuestionIndex].options.map((option, i) => {
              const letter = String.fromCharCode(65 + i);
              let className = '';

              if (submitted) {
                const isCorrect = letter === currentQuiz[currentQuestionIndex].answer;
                if (isCorrect) {
                  className = 'correct';
                } else if (selectedOption === letter) {
                  className = 'incorrect';
                }
              } else if (selectedOption === letter) {
                className = 'selected';
              }

              return (
                <li 
                  key={i} 
                  className={className}
                  onClick={() => handleOptionSelect(letter)} 
                >
                  <span style={{ marginRight: '10px' }}>{letter}:</span>
                  <span>{option}</span>
                </li>
              );
            })}
          </ul>
          <button 
            onClick={handleSubmit} 
            className="submit-button"
            disabled={!selectedOption}
          >
            Confirmar Resposta
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
