import React, { useState } from 'react';

const coursesData = [
  {
    id: 1,
    title: 'Português',
    description: 'Aprenda os conceitos básicos de cada classe gramatical.',
    lessons: [
      { id: 1, title: 'Substantivos e Artigos' },
      { id: 2, title: 'Verbos e Advérbios' },
      { id: 3, title: 'Pronomes e Preposições' },
      { id: 4, title: 'Adjetivos e Conjunções' },
      { id: 5, title: 'Interjeições e Numerais' },
    ],
  },
  {
    id: 2,
    title: 'Direito Administrativo',
    description: 'Estudo sobre administração pública e seus princípios.',
    lessons: [
      { id: 1, title: 'Introdução ao Direito Administrativo' },
      { id: 2, title: 'Poderes Administrativos' },
      { id: 3, title: 'Controle da Administração Pública' },
    ],
  },
  {
    id: 3,
    title: 'Direito Constitucional',
    description: 'Estudo sobre a Constituição Federal e seus princípios.',
    lessons: [
      { id: 1, title: 'Princípios Constitucionais' },
      { id: 2, title: 'Direitos e Garantias Fundamentais' },
      { id: 3, title: 'Organização dos Poderes' },
      { id: 4, title: 'Nacionalidade'},
      { id: 5, title: 'Partido Políticos'}
    ],
  },
  {
    id: 4,
    title: 'Direito Penal',
    description: 'Estudo sobre o Código Penal e os crimes previstos.',
    lessons: [
      { id: 1, title: 'Teoria Geral do Crime' },
      { id: 2, title: 'Crimes Contra o Patrimônio' },
      { id: 3, title: 'Crimes Contra a Pessoa' },
    ],
  },
  {
    id: 5,
    title: 'Matemática e RLM',
    description: 'Raciocínio lógico e matemática básica.',
    lessons: [
      { id: 1, title: 'Lógica Proposicional' },
      { id: 2, title: 'Matemática Financeira' },
      { id: 3, title: 'Probabilidade e Estatística' },
    ],
  },
  {
    id: 6,
    title: 'Lei Extravagante',
    description: 'Estudo de legislações complementares.',
    lessons: [
      { id: 1, title: 'Lei de Drogas' },
      { id: 2, title: 'Lei de Execuções Penais' },
      { id: 3, title: 'Lei Maria da Penha' },
      { id: 4, title: 'Lei de Abuso de Autoridade'},
      { id: 5, title: 'E.C.A' },
      { id: 6, title: 'Tortura'},
      { id: 7, title: 'Crime Hediondos'},
      { id: 8, title: 'Crimes de Preconceito de Raça ou Cor'},
      { id: 9, title: 'Organização Criminosa'},
      { id: 10, title: 'Crimes Ambientais'}
    ],
  },
];

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId === selectedCourse ? null : courseId);
  };

  return (
    <div className="course-list">
      {coursesData.map((course) => (
        <div key={course.id} className="course">
          <h2 onClick={() => handleCourseClick(course.id)}>{course.title}</h2>
          <p>{course.description}</p>

          {/* Exibir as aulas quando o curso for selecionado */}
          {selectedCourse === course.id && (
            <ul className="lessons">
              {course.lessons.map((lesson) => (
                <li key={lesson.id}>{lesson.title}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseList;