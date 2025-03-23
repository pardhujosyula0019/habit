import React from 'react';
import HabitItem from '../HabitItem/HabitItem.jsx';
import './HabitList.css';

function HabitList({ habits, onComplete }) {
  return (
    <div className="habit-list">
      <h2>Today's Habits</h2>      <ul>
        {habits.map(habit => (
          <HabitItem key={habit._id} habit={habit} onComplete={onComplete} />
        ))}
      </ul>
      {habits.length === 0 && <p>No habits for today!  Enjoy your free time.</p>}
    </div>
  );
}

export default HabitList;