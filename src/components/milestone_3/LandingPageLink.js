import React from 'react';
import './LandingPageLink.css';

const LandingPageLink = ({ url }) => {
  return (
    <div className="landing-page-link">
      <h2>Landing Page</h2>
      <a href={url} target="_blank" rel="noopener noreferrer" className="landing-link">
        Visit Our Landing Page
      </a>
    </div>
  );
};

export default LandingPageLink;
