// src/components/SignUp.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import './SignUp.css'; // Assuming you will add styles here

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Email:", email, "Password:", password);
    
    // Redirect after signup (replace '/redirect-page' with your desired route)
    history.push('/redirect-page'); 
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <p>
          By clicking Sign up below, I agree to the <a href="#">Terms of Use</a> and I accept the <a href="#">Privacy Policy</a>.
        </p>

        <button className="social-btn google-btn">
          <img src="google-logo-url" alt="Google" /> Sign up with Google
        </button>
        <button className="social-btn apple-btn">
          <img src="apple-logo-url" alt="Apple" /> Sign up with Apple
        </button>

        <p className="or">or</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="join-text">
          Already a member? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
