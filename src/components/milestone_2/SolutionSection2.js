import React from 'react';
import './SolutionSection2.css';

const SolutionSection2 = () => {
  return (
    <div className="solution-section2">
      <h2>
        <u>What we thought is a solution for the problem:</u>
      </h2>
      <p>
        With this problem in mind, we envisioned TravelGenius as a platform that consolidates travel data and presents it in a customized way. Our solution revolves around:
      </p>
      <ul>
        <li><strong>Personalized Recommendations</strong>: Tailoring destination suggestions based on user preferences, past travel reviews, and criteria like safety, air quality, and affordability.</li>
        <li><strong>Highlighting Hidden Gems</strong>: Giving lesser-known locations visibility, so users can discover unique spots off the beaten path.</li>
        <li><strong>Curated News and Updates</strong>: Offering real-time information relevant to users' travel interests, based on location and preferences.</li>
        <li><strong>Safety Focus</strong>: We prioritize user safety by vetting recommendations and providing insights on the safety of locations.</li>
      </ul>
    </div>
  );
};

export default SolutionSection2;
