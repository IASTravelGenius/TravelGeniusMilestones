import React from 'react';
import './FigmaPrototypeEmbed.css';

const FigmaPrototypeEmbed = ({ title, embedUrl }) => {
  return (
    <div className="figma-prototype-embed">
      <h2><del>{title}</del> - Outdated</h2>
      <iframe
        title="Figma Prototype"
        src={embedUrl}
        allowFullScreen
        className="figma-iframe"
      ></iframe>
    </div>
  );
};

export default FigmaPrototypeEmbed;
