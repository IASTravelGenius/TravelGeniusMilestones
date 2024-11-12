import React from 'react';
import './Milestone2Content.css';
import ProblemSection2 from './ProblemSection2';
import SolutionSection2 from './SolutionSection2';
import CustomerDiscoverySection from './CustomerDiscoverySection';
import CustomerDiscoveryProcessSection from './CustomerDiscoveryProcessSection';

const Milestone2Content = () => (
  <div className="milestone2-content">
    <h1 className="milestone-title">Milestone 2</h1>
    <ProblemSection2 />
    <SolutionSection2 />
    <CustomerDiscoverySection />
    <CustomerDiscoveryProcessSection />
  </div>
);

export default Milestone2Content;
