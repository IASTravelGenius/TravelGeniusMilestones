import React from 'react';

const Section = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        This is the {title} section. Customize this content as per your requirements.
      </p>
    </div>
  );
};

export default Section;
