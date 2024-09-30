import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Adicione o arquivo CSS para estilizar a sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span className="text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/cursos">
            <FontAwesomeIcon icon={faBook} className="icon" />
            <span className="text">Cursos</span>
          </Link>
        </li>
        <li>
          <Link to="/perfil">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span className="text">Perfil</span>
          </Link>
        </li>
        <li>
          <Link to="/quiz">
            <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
            <span className="text">Quiz</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
