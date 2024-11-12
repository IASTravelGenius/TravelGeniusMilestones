import React from 'react';
import './FigmaMockupLink.css';

const FigmaMockupLink = ({ url }) => {
  return (
    <div className="figma-mockup-link">
      <h2>Figma Mockup</h2>
      <a href={url} target="_blank" rel="noopener noreferrer" className="figma-link">
        View Figma Mockup
      </a>
    </div>
  );
};

export default FigmaMockupLink;
