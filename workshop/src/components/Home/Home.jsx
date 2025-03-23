import React, { useState, useEffect } from 'react';
import HabitList from '../HabitList/HabitList.jsx';
import Animation from '../Animation/Animation.jsx';
import ActivityTracker from '../ActivityTracker/ActivityTracker.jsx';
import './Home.css';

function Home() {
  const [habits, setHabits] = useState([]); // Load from API
  const [completedHabits, setCompletedHabits] = useState([]);
  const [showHabitList, setShowHabitList] = useState(true);

  useEffect(() => {
    // Fetch habits from your API endpoint
    const fetchHabits = async () => {
      // Example API call (replace with your actual endpoint)
      const response = await fetch('/api/habits'); // Backend API
      const data = await response.json();
      setHabits(data);
    };

    fetchHabits();
  }, []);

  const handleHabitCompletion = (habitId) => {
    setCompletedHabits([...completedHabits, habitId]);

    // Remove the completed habit from the habits list
    setHabits(habits.filter(habit => habit._id !== habitId));

    // Hide the HabitList if all habits are completed
    if (habits.length === 1) {
      setShowHabitList(false);
    }
  };

  useEffect(() => {
    // Reset the HabitList to true at the beginning of each day
    const resetHabitList = () => {
      setShowHabitList(true);
    };

    // Get the current date
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); // Midnight of the next day
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    // Set a timeout to reset the HabitList at midnight
    const timeoutId = setTimeout(resetHabitList, timeUntilMidnight);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="home-container">
      <div className="animation-container">        <Animation completedHabits={completedHabits} />
      </div>
      <div className="habit-list-container">
        {showHabitList && (
          <HabitList habits={habits} onComplete={handleHabitCompletion} />
        )}
      </div>
      <div className="activity-tracker-container">
        <ActivityTracker />
      </div>
    </div>
  );
}

export default Home;