// PenalLawLessonContent.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PenalLawLessonContent = () => {
  const { lessonId } = useParams();

  const lessonsContent = {
    1: 'Teoria Geral do Crime...',
    2: 'Crimes Contra o Patrimônio...',
    3: 'Crime Contra a Pessoa...',
  };

  return (
    <div>
      <h1>Direito Penal - Aula {lessonId}</h1>
      <p>{lessonsContent[lessonId]}</p>
    </div>
  );
};

export default PenalLawLessonContent;
