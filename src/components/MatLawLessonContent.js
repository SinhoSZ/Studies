// MatLawLessonContent.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MatLawLessonContent = () => {
  const { lessonId } = useParams();

  const lessonsContent = {
    1: 'Lógica Proposicional...',
    2: 'Matemática Financeira...',
    3: 'Propabilidade e Estatística...',
  };

  return (
    <div>
      <h1>Matemática e RLM - Aula {lessonId}</h1>
      <p>{lessonsContent[lessonId]}</p>
    </div>
  );
};

export default MatLawLessonContent;
