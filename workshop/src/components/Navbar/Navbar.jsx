import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create Navbar.css for styling

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Habit Tracker</Link>
      </div>

      <div className="navbar-center">
        <input type="search" placeholder="Search..." className="search-bar" />
      </div>

      <div className="navbar-right">
        <div className="profile-dropdown">
          <button className="profile-button">Profile</button>
          <div className="dropdown-content">
            <Link to="/profile">View Profile</Link>
            <button onClick={onLogout}>Logout</button>
          </div>
        </div>
      </div>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Habits (Home)</Link>        </li>
        <li className="nav-item">
          <Link to="/social" className="nav-link">Social Media</Link>
        </li>
        <li className="nav-item">
          <Link to="/broadcast" className="nav-link">Broadcast</Link>
        </li>
        <li className="nav-item">
          <Link to="/newpost" className="nav-link">New Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;