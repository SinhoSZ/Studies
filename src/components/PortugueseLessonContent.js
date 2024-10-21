// PortugueseLessonContent.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PortugueseLessonContent = () => {
  const { lessonId } = useParams();

  const lessonsContent = {
    1: 'Conteúdo sobre Substantivos e Artigos...',
    2: 'Conteúdo sobre Verbos e Advérbios...',
    3: 'Conteúdo sobre Pronomes e Preposições...',
    4: 'Conteúdo sobre Adjetivos e Conjunções...',
    5: 'Conteúdo sobre Interjeições e Numerais...',
  };

  return (
    <div>
      <h1>Português - Aula {lessonId}</h1>
      <p>{lessonsContent[lessonId]}</p>
    </div>
  );
};

export default PortugueseLessonContent;
