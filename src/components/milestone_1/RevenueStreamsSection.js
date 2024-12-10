import React from 'react';
import './RevenueStreamsSection.css';
import PlansTable from './PlansTable';

const RevenueStreamsSection = () => (
  <div className="revenue-streams-section">
    <h2>8. Revenue Streams</h2>
    <div className="revenue-card">
      <h3>Freemium Model</h3>
      <p>
        Customers can access basic features for finding tourist attractions,
        but for having a personalized plan they have to pay to upgrade to a
        premium version.
      </p>
    </div>
    <PlansTable />
  </div>
);

export default RevenueStreamsSection;