import React, { useState, useEffect } from 'react';
import ActivityTracker from '../ActivityTracker/ActivityTracker.jsx';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({}); // Load user data from API

  useEffect(() => {
    // Fetch user profile data from your API
    const fetchUser = async () => {
      const response = await fetch('/api/profile');
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div className="profile">
      <h1>{user.username}'s Profile</h1>
      <img src={user.avatar || 'default-avatar.png'} alt="Avatar" className="profile-avatar" />
      <p>Email: {user.email}</p>
      {/* Display user's posts and activity tracker */}
      <ActivityTracker userId={user._id} />
      {/* Display user's public to-do lists */}
    </div>
  );
}

export default Profile;