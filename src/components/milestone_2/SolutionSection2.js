import React from 'react';
import './SolutionSection2.css';

const SolutionSection2 = () => {
  return (
    <div className="solution-section2">
      <h2>
        <u>What we thought is a solution for the problem:</u>
      </h2>
      <p>
        With this problem in mind, we envisioned TravelGenius as a platform that consolidates travel data and presents it in a customized way. Our solution is based on the following hypotheses:
      </p>
      <ul>
        <li><strong>Personalized Destination Recommendations:</strong> If we tailor destination suggestions based on user preferences, past travel reviews, and factors like safety, air quality, and affordability, then users will experience a more satisfying and relevant travel planning process.</li>
        <li><strong>Highlighting Hidden Gems:</strong> If we give visibility to lesser-known locations, then users will be more likely to discover unique and off-the-beaten-path destinations that align with their travel interests.</li>
        <li><strong>Real-time News and Updates:</strong> If we provide real-time information relevant to users' travel interests, based on their location and preferences, then users will feel more informed and prepared for their trips, leading to a better overall travel experience.</li>
        <li><strong>Safety Focus:</strong> If we prioritize user safety by vetting recommendations and offering insights on the safety of locations, then users will feel more confident and secure when choosing their travel destinations.</li>
      </ul>
    </div>
  );
};

export default SolutionSection2;
