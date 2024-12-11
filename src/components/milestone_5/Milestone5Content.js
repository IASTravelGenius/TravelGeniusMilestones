import React from 'react';
import './Milestone5Content.css';
import LeadGeneratingCampaign from './LeadGeneratingCampaign';
import ComparisonLeadChannels from './ComparisonLeadChannels';
import NotesOnAnalytics from './NotesOnAnalytics';

const Milestone5Content = () => (
    <div className="milestone5-content">
        <h1 className="milestone-title">Milestone 5</h1>
        <LeadGeneratingCampaign />
        <ComparisonLeadChannels />
        <NotesOnAnalytics />
    </div>
  );
  
  export default Milestone5Content;