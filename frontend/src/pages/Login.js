import React from 'react';
import '../styles/Login.css'

function Login() {
  return (
    <div className="login-div">
      <h2>Login</h2>
      <form className="login-form">
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="button" className="login-btn">Login</button>
      </form>
      <p>Don't have an account? <span className="register-link"><a href="/register">Register Here</a></span></p>
    </div>
  );
}

export default Login;
