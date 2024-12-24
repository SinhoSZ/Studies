import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Perfil from './pages/Perfil';
import Quiz from './pages/Quiz';
import QuizPage from './components/QuizPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PortugueseLessonContent from './components/PortugueseLessonContent';
import AdminLawLessonContent from './components/AdminLawLessonContent';
import ConstLawLessonContent from './components/ConstLawLessonContent';
import PenalLawLessonContent from './components/PenalLawLessonContent';
import MatLawLessonContent from './components/MatLawLessonContent';
import EstraLawLessonContent from './components/EstraLawLessonContent';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import './components/CourseList.css';

const AppContent = () => {
  const location = useLocation(); // Obtém a rota atual

  // Define quais páginas não terão Header e Sidebar
  const noHeaderSidebarRoutes = ['/login', '/register'];

  return (
    <div className="App">
      {/* Renderiza o Header e Sidebar apenas se não estiver nas rotas de login ou registro */}
      {!noHeaderSidebarRoutes.includes(location.pathname) && (
        <>
          <Header />
          <Sidebar />
        </>
      )}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          {/* Rotas para conteúdos específicos */}
          <Route path="/course/1/lesson/:lessonId" element={<PortugueseLessonContent />} />
          <Route path="/course/2/lesson/:lessonId" element={<AdminLawLessonContent />} />
          <Route path="/course/3/lesson/:lessonId" element={<ConstLawLessonContent />} />
          <Route path="/course/4/lesson/:lessonId" element={<PenalLawLessonContent />} />
          <Route path="/course/5/lesson/:lessonId" element={<MatLawLessonContent />} />
          <Route path="/course/6/lesson/:lessonId" element={<EstraLawLessonContent />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
