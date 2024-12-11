import React from 'react';
import './FaceToFaceInterviews.css';

const FaceToFaceInterviews = ({ link }) => {
  return (
    <div className="face-to-face-interviews">
      <h2>Face-to-Face Interviews</h2>
        <div className="facetoface-item">
          <h3>Radu</h3>
          <p>Radu values efficient trip planning, cultural exploration, and authentic food experiences but struggles with optimizing limited travel days and avoiding tourist traps. He relies on Google Flights for cheap tickets and extensive research to balance mainstream attractions with hidden gems. Administrative uncertainties and unforeseen events add to his travel anxiety.</p>
          <h3>Impact on Product Development</h3>
          <ol>
            <li><strong>Food-Centric Recommendations: </strong>Prioritize features for discovering authentic, non-touristy dining spots.</li>
            <li><strong>Streamlined Planning Tools: </strong>Offer automated itineraries and a consolidated platform to simplify planning.</li>
            <li><strong>Real-Time Updates: </strong>Provide live alerts for local events, disruptions, and administrative requirements.</li>
            <li><strong>Safety Features: </strong>Include optional safety alerts and risk ratings for specific traveler concerns.</li>
          </ol>
          <p>These enhancements address Radu’s needs for efficiency, authenticity, and reduced travel stress.</p>
        </div>
        <div className="facetoface-item">
          <h3>Maria</h3>
          <p>Maria travels frequently within Europe, taking 4-5 trips per year. She prioritizes safety, particularly as a solo female traveler, and enjoys exploring smaller cities that showcase local culture rather than just capitals. Maria values thorough planning but struggles with finding hidden gems and planning around unpredictable factors like time spent at attractions.</p>
          <h3>Impact on Product Development</h3>
          <ol>
            <li><strong>Safety Features: </strong>Include tools to identify safe destinations, with a focus on smaller, culturally rich cities and alerts for areas to avoid.</li>
            <li><strong>Hidden Gems Discovery: </strong>Enhance features to highlight lesser-known locations, particularly in smaller towns that reflect a country’s authentic culture.</li>
            <li><strong>Planning Assistance: </strong>Provide tools to estimate time needed at attractions and structure itineraries by area to streamline daily plans.</li>
            <li><strong>Budget-Friendly Options: </strong>Continue emphasizing affordable flights and accommodations to align with Maria’s planning style.</li>
          </ol>
          <p>These enhancements address Maria’s needs for efficiency, authenticity, and reduced travel stress.</p>
        </div>
        <div className="facetoface-item">
          <h3>Iulia</h3>
          <p>Iulia travels frequently within Europe, taking 4-5 trips per year. She prioritizes safety, particularly as a solo female traveler, and enjoys exploring smaller cities that showcase local culture rather than just capitals. Maria values thorough planning but struggles with finding hidden gems and planning around unpredictable factors like time spent at attractions.</p>
          <h3>Impact on Product Development</h3>
          <ol>
            <li><strong>Personalized Planning Tools: </strong>Offer features that go beyond Google Maps, providing tailored itineraries based on individual preferences and travel styles.</li>
            <li><strong>Hidden Gems Discovery: </strong>Include curated recommendations for unique, lesser-known attractions, particularly in smaller towns.</li>
            <li><strong>Safety Features: </strong>Provide neighborhood safety ratings and alerts to address solo traveler concerns.</li>
            <li><strong>Efficient Itinerary Management: </strong>Help travelers organize attractions by proximity and estimate time spent at each location.</li>
          </ol>
          <p>These enhancements address Iulia's needs for efficiency, authenticity, and reduced travel stress.</p>
        </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="interview-link">
        View Face-to-Face Interviews
      </a>
    </div>
  );
};

export default FaceToFaceInterviews;
