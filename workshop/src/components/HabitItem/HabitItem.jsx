import React from 'react';
import './HabitItem.css';

function HabitItem({ habit, onComplete }) {
  return (
    <li className="habit-item">
      {habit.name}
      <button onClick={() => onComplete(habit._id)}>Complete</button>
    </li>
  );
}

export default HabitItem;