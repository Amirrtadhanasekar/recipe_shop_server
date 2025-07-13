import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./css/FormPage.css"; // Make sure the path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    axios.post("http://localhost:5000/fullstack/login", { email, password })
      .then((res) => {
        alert("Login successful!");
        setEmail('');
        setPassword('');
        navigate("/Body");
      })
      .catch((err) => {
        console.error(err);
        alert("Login failed. Check your credentials.");
      });
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Login</h2>
        <form className="form-fields">
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter the email" 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
            />
          </div>
        </form>
        <button onClick={handleLogin} className="submit-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
