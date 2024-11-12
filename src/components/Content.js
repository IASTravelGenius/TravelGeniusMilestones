import React from 'react';
import Milestone1Content from './milestone_1/Milestone1Content';
import Milestone2Content from './milestone_2/Milestone2Content'
import Milestone3Content from './milestone_3/Milestone3Content'
import './Content.css';

const Content = () => {
  return (
    <div className="content-wrapper">
      <section id="milestone1">
        <Milestone1Content />
      </section>
      <section id="milestone2">
        <Milestone2Content />
      </section>
      <section id="milestone3">
        <Milestone3Content />
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Content;
