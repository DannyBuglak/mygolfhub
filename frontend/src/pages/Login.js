import React, { useState } from 'react';
import '../styles/Login.css';
import { login } from '../services/api.js';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      console.log(response);
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };


  return (
    <div className="login-div">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Email:
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p>Don't have an account? <span className="register-link"><a href="/register">Register Here</a></span></p>
    </div>
  );
}

export default Login;
