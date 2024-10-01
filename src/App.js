import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Perfil from './pages/Perfil';
import Quiz from './pages/Quiz';
import QuizPage from './components/QuizPage'; // Importando o QuizPage
import Sidebar from './components/Sidebar';
import Header from './components/Header';
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
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
