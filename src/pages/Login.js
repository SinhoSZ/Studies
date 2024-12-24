import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <p>
          Não tem uma conta? <a href="/register">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
