import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SocialMedia from './components/SocialMedia/SocialMedia.jsx';
import Broadcast from './components/Broadcast/Broadcast.jsx';
import Profile from './components/Profile/Profile.jsx';
import Login from './Auth/Login.jsx';
import Signup from './Auth/Signup.jsx';
import './App.css';  // Import global styles

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example auth state

  useEffect(() => {
    // Check local storage or cookies for auth token on app load
    const token = localStorage.getItem('token'); // Or cookie check
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token); // Store token
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };


  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Navbar onLogout={handleLogout} />}  {/* Always render Navbar when logged in */}

        <div className="content-container">
          <Routes>
            <Route path="/login" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
            <Route path="/signup" element={!isLoggedIn ? <Signup onLogin={handleLogin} /> : <Navigate to="/" />} />
            <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
            <Route path="/social" element={isLoggedIn ? <SocialMedia /> : <Navigate to="/login" />} />
            <Route path="/broadcast" element={isLoggedIn ? <Broadcast /> : <Navigate to="/login" />} />            <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;