import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Perfil from './pages/Perfil';
import Quiz from './pages/Quiz';
import QuizPage from './components/QuizPage'; // Importando o QuizPage
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PortugueseLessonContent from './components/PortugueseLessonContent'; // Conteúdo de Português
import AdminLawLessonContent from './components/AdminLawLessonContent'; // Conteúdo de Direito Administrativo
import ConstLawLessonContent from './components/ConstLawLessonContent'; // Conteúdo de Direito Constitucional
import PenalLawLessonContent from './components/PenalLawLessonContent'; // Conteúdo de Direito Penal
import MatLawLessonContent from './components/MatLawLessonContent'; // Conteúdo de Matemática e RLM
import EstraLawLessonContent from './components/EstraLawLessonContent'; // Conteúdo de Direito Estravagante
import './App.css'; // Estilos globais
import './components/CourseList.css'; // Estilos para cursos

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Adicionando o Header */}
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/:id" element={<QuizPage />} /> {/* Rota para o QuizPage */}

            {/* Rotas para o conteúdo de Português */}
            <Route path="/course/1/lesson/:lessonId" element={<PortugueseLessonContent />} />
            {/* Rotas para o conteúdo de Direito Administrativo */}
            <Route path="/course/2/lesson/:lessonId" element={<AdminLawLessonContent />} />
            {/* Rotas para o conteúdo de Direito Constitucional */}
            <Route path="/course/3/lesson/:lessonId" element={<ConstLawLessonContent />} />
            {/* Rotas para o conteúdo de Direito Penal */}
            <Route path="/course/4/lesson/:lessonId" element={<PenalLawLessonContent />} />
            {/* Rotas para o conteúdo de Matemática e RLM */}
            <Route path="/course/5/lesson/:lessonId" element={<MatLawLessonContent />} />
            {/*Rotas para o conteúdo de Lei estravagantes */}
            <Route path="/course/6/lesson/:lessonId" element={<EstraLawLessonContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
