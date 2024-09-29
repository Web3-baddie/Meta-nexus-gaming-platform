import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Use useHistory for older versions
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory(); // Initialize history

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle signup logic (e.g., API call)
    console.log("Email:", email, "Password:", password);
    
    // Redirect to the redirected page after signup
    history.push('/redirect'); // Use history.push to navigate
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <p>
          By signing up, I agree to the <a href="#">Terms of Use</a> and I accept the <a href="#">Privacy Policy</a>.
        </p>

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

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="join-text">
          Already a member? <a href="#">Sign in here</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
