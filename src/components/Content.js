import React from 'react';
import Milestone1Content from './milestone_1/Milestone1Content';
import './Content.css';

const Content = () => {
  return (
    <div className="content-wrapper">
      <section id="milestone1">
        <Milestone1Content />
      </section>
      <section id="milestone2">
        <h1>Milestone 2</h1>
        <p>This is the Milestone 2 section. Customize this content as per your requirements.</p>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Content;
