import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './LogIn.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        // handle successful login
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-container">
      <div className="welcome-container">
        <h1 className="welcome-header">Welcome Page</h1>
        <h1 className="welcome-text">One line text Will be here</h1>
        <p className="welcome-info">Sign in to continue access pages</p>
        <p className="welcome-register">
          Don’t Have An Account?
          <Link className="link-btn" to='/'>
            <button className="register-button">
              Register
            </button>
          </Link>
        </p>
      </div>
        <div className="upon-div">
        <div className="form-container">
      <div className="form-header">
          <h2>Sign In</h2>
          <p>Sign in to continue access pages</p>
        </div>
        <div className="form-body">
          <form onSubmit={handleFormSubmit}>
            <label>
              <input placeholder="email" type="email" name="email" className="email-input" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br />
            <label>
              <input placeholder="password" type="password" name="password" className="password-input" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br />
            <button type="submit" id="signin-button">Sign In</button>
          </form>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Login;
