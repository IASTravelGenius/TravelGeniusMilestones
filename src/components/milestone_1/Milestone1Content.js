import React from 'react';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import CustomerSegments from './CustomerSegments';
import Competition from './Competition';
import AdvantageSection from './AdvantageSection'
import KeyMetricsSection from './KeyMetricsSection';
import CostStructureSection from './CostStructureSection';
import RevenueStreamsSection from './RevenueStreamsSection';
import './Milestone1Content.css';
import TeamSection from './TeamSection';

const Milestone1Content = () => (
  <div className="milestone1-content">
    <h1 className="milestone-title">Milestone 1</h1>
    <TeamSection />
    <ProblemSection />
    <SolutionSection />
    <CustomerSegments />
    <Competition />
    <AdvantageSection />
    <KeyMetricsSection />
    <CostStructureSection />
    <RevenueStreamsSection />
  </div>
);

export default Milestone1Content;
