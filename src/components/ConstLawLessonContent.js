import React from 'react';
import { useParams } from 'react-router-dom';

const ConstLawLessonContent = () => {
  const { lessonId } = useParams();

  const lessonsContent = {
    1: 'Conteúdo de Princípios Constitucionais',
    2: 'Conteúdo de Direitos e Garantias Fundamentais',
    3: 'Conteúdo de Organização dos Poderes',
    4: 'Conteúdo de Nacionalidade',
    5: 'Conteúdo de Partidos Políticos',
  };

  return (
    <div>
      <h1>Lição {lessonId} - Direito Constitucional</h1>
      <p>{lessonsContent[lessonId]}</p>
    </div>
  );
};

export default ConstLawLessonContent;
