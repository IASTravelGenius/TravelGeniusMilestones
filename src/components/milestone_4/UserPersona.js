import React from 'react';
import './UserPersona.css';

const UserPersona = ({ imageUrl }) => {
  return (
    <div className="user-persona">
      <h2>User Persona</h2>
      <p>We created a detailed user persona for our main targeted customer segment:</p>
      <img src={imageUrl} alt="User Persona" className="persona-image" />
    </div>
  );
};

export default UserPersona;
