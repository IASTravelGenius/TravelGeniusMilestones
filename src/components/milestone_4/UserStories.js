import React from 'react';
import './UserStories.css';

const UserStories = ({ imageUrl, title }) => {
  return (
    <div className="user-stories">
      <h2>{title}</h2>
      <p>We documented detailed {title} to better understand the user journey:</p>
      <div className="image-container">
        <img src={imageUrl} alt="User Stories" className="stories-image" />
      </div>
    </div>
  );
};

export default UserStories;
