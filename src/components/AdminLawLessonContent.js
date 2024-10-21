// AdminLawLessonContent.js
import React from 'react';
import { useParams } from 'react-router-dom';

const AdminLawLessonContent = () => {
  const { lessonId } = useParams();

  const lessonsContent = {
    1: 'Conteúdo sobre Introdução ao Direito Administrativo...',
    2: 'Conteúdo sobre Poderes Administrativos...',
    3: 'Conteúdo sobre Controle da Administração Pública...',
  };

  return (
    <div>
      <h1>Direito Administrativo - Aula {lessonId}</h1>
      <p>{lessonsContent[lessonId]}</p>
    </div>
  );
};

export default AdminLawLessonContent;
