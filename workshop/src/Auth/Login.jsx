import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_Path } from "../Helper/ApiPath";
import './Auth.css';


function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Start loading state

    try {
      // Using the provided API path for login
      const response = await fetch(`${API_Path}/customer/login`, { // Ensure API Path is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // Stop loading after response
      setLoading(false);

      if (response.ok) {
        // On success, store token and redirect
        localStorage.setItem('token', data.token);
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('customerName', data.customer.username);

        console.log('Login successful!');
        onLogin(data.token); // Pass token to parent component
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        // If login fails, set the error message
        setError(data.message || 'Invalid credentials.');
      }
    } catch (err) {
      // Handle any network-related or unexpected errors
      setLoading(false);
      setError('An error occurred during login.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Handle email input change
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Handle password input change
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Logging In...' : 'Login'}
        </button> {/* Disable button and show loading state */}
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
