import React, { useState, useEffect } from 'react';
import './Broadcast.css';

function Broadcast() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Fetch broadcast groups from your API
    const fetchGroups = async () => {
      const response = await fetch('/api/broadcast-groups');
      const data = await response.json();
      setGroups(data);
    };

    fetchGroups();
  }, []);

  return (
    <div className="broadcast">
      <h1>Broadcast Groups</h1>
      {groups.map(group => (
        <div key={group._id} className="broadcast-group">
          <h2>{group.name}</h2>
          <p>{group.description}</p>
          {/* Display the to-do list shared by the influencer */}
          {group.todoList && (
            <ul>
              {group.todoList.map(item => (
                <li key={item._id}>{item.text}</li>
              ))}
            </ul>
          )}
          <button>Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Broadcast;