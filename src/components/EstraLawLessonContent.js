// EstraLawLessonContent.js
import React from 'react';
import { useParams } from 'react-router-dom';

const EstraLawLessonContent = () => {
  const { lessonId } = useParams();

  const lessonsContent = {
    1: 'Lei de Drogas...',
    2: 'Lei de Execuções Penais...',
    3: 'Lei Maria da Penha...',
    4: 'Lei de Abuso de Autoridade',
    5: 'E.C.A',
    6: 'Tortura',
    7: 'Crimes Hediondos',
    8: 'Crimes de Preconceito de Raça ou Cor',
    9: 'Organização Criminosa',
    10: 'Crimes Ambientais',
  };

  return (
    <div>
      <h1>Lei Estravagante - Aula {lessonId}</h1>
      <p>{lessonsContent[lessonId]}</p>
    </div>
  );
};

export default EstraLawLessonContent;
