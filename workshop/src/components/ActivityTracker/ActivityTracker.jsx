import React from 'react';
import './ActivityTracker.css';

function ActivityTracker({ userId }) {
  // Dummy data for demonstration
  const activityData = [
    [1, 0, 2, 1, 0, 0, 3], // Week 1 (Sun-Sat)
    [0, 1, 0, 2, 0, 1, 1], // Week 2
    [2, 0, 1, 0, 3, 0, 0], // Week 3
    [1, 1, 0, 0, 1, 2, 1], // Week 4
    [0, 2, 1, 1, 0, 1, 0], // Week 5
  ];

  const getActivityColor = (count) => {    if (count === 0) return '#ebedf0';
    if (count <= 1) return '#9be9a8';
    if (count <= 2) return '#30dd8a';
    return '#216e39';
  };

  return (
    <div className="activity-tracker">
      <h2>Activity Tracker</h2>
      <div className="activity-grid">
        {activityData.map((week, weekIndex) => (
          <div key={weekIndex} className="activity-week">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="activity-day"
                style={{ backgroundColor: getActivityColor(day) }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityTracker;