import React from 'react';
import './Competition.css';

const Competition = () => (
    <div className="competition">
      <h2>4. Competition</h2>
      <div className="competition-item">
        <h3>TripAdvisor</h3>
        <h5>Overview</h5>
        <p>TripAdvisor is one of the most widely used travel platforms globally, offering reviews, user-generated
          content, and booking services for accommodations, restaurants, attractions, and tours. It focuses on providing
          travelers with comprehensive information to plan their trips by leveraging user feedback and ratings.</p>
        <h5>Strengths</h5>
        <ul>
          <li>Extensive database of reviews and photos shared by millions of users.</li>
          <li>Provides access to bookings directly from its platform.</li>
          <li>Features travel forums for user interaction and real-time advice.</li>
          <li>Its’ main focus is on travelling reviews and rating (unlike Google Maps)</li>
        </ul>
        <h5>Weaknesses</h5>
        <ul>
          <li>Overwhelming amount of information that can be difficult to navigate.</li>
          <li>Recommendations often prioritize popular destinations and paid promotions over personalization.</li>
          <li>Limited focus on safety and dynamic, real-time updates.</li>
        </ul>
      </div>
      <div className="competition-item">
        <h3>Google Travel</h3>
        <h5>Overview</h5>
        <p>Google Travel (part of Google Maps and Google Search) offers trip planning features that organize destination
          information into categories like reservations, day plans, and activities. It leverages Google’s vast data
          ecosystem to provide insights on hotels, flights, and attractions.</p>
        <h5>Strengths</h5>
        <ul>
          <li>Integrated into the broader Google ecosystem, making it accessible and familiar to users.</li>
          <li>Offers a streamlined interface for tracking reservations and itineraries.</li>
          <li>Provides intelligent suggestions based on user behavior and preferences.</li>
        </ul>
        <h5>Weaknesses</h5>
        <ul>
          <li>Primarily aggregates data rather than curating personalized experiences.</li>
          <li>Lacks in-depth safety analysis or contextual recommendations tailored to user needs.</li>
          <li>Focuses on well-known destinations, leaving little room for unique discoveries.</li>
        </ul>
      </div>
      <div className="competition-item">
        <h3>Airbnb Experiences</h3>
        <h5>Overview</h5>
        <p>Airbnb Experiences focuses on unique, host-led activities and tours. It allows users to book personalized
          experiences offered by locals, often emphasizing cultural immersion.</p>
        <h5>Strengths</h5>
        <ul>
          <li>Strong focus on local and authentic experiences.</li>
          <li>A wide range of activities tailored to niche interests.</li>
          <li>Seamless integration with Airbnb accommodations.</li>
        </ul>
        <h5>Weaknesses</h5>
        <ul>
          <li>Limited to experiences rather than a comprehensive travel planning tool.</li>
          <li>High costs for some experiences, making it less accessible to budget travelers.</li>
          <li>Less popular</li>
        </ul>
      </div>
      <h3>The apps from above can also offer food experiences, but the following apps are more food focused:</h3>
      <div className="competition-item">
        <h3>World of Mouth</h3>
        <h5>Overview</h5>
        <p>World of Mouth is a restaurant guide curated by a global community of experts, including chefs and food
          critics. It offers recommendations for dining spots worldwide, emphasizing authentic and high-quality food
          experiences.</p>
        <h5>Strengths</h5>
        <ul>
          <li>Extensive network of expert contributors providing trusted recommendations.</li>
          <li>Covers a wide range of destinations globally.</li>
          <li>Focuses on authentic and high-quality dining experiences.</li>
        </ul>
        <h5>Weaknesses</h5>
        <ul>
          <li>May lack real-time updates on current conditions or crowd levels.</li>
          <li>Limited user-generated content, potentially missing diverse perspectives.</li>
          <li>Does not offer comprehensive travel planning tools beyond dining recommendations.</li>
        </ul>
      </div>
      <div className="competition-item">
        <h3>Resy</h3>
        <h5>Overview</h5>
        <p>Resy is a restaurant reservation platform that allows users to book tables at various dining establishments.
          It offers curated lists and editorial content to inspire dining choices.</p>
        <h5>Strengths</h5>
        <ul>
          <li>Streamlines the reservation process for a variety of restaurants.</li>
          <li>Provides curated content to help users discover new dining spots.</li>
          <li>User-friendly interface with real-time availability.</li>
        </ul>
        <h5>Weaknesses</h5>
        <ul>
          <li>Limited to reservation services without broader travel planning features.</li>
          <li>Focuses primarily on popular or partner restaurants, potentially overlooking hidden gems.</li>
          <li>Does not offer personalized itineraries or real-time safety information.</li>
        </ul>
      </div>
      <div className="competition-item">
        <h3>Eatwith</h3>
        <h5>Overview</h5>
        <p> Eatwith connects travelers with local hosts offering dining experiences, cooking classes, and food tours. It emphasizes cultural immersion through shared meals and culinary activities.</p>
        <h5>Strengths</h5>
        <ul>
          <li>Offers unique, host-led dining experiences for cultural immersion.</li>
          <li>Provides a platform for booking cooking classes and food tours.</li>
          <li>Focuses on authentic, local culinary traditions.</li>
        </ul>
        <h5>Weaknesses</h5>
        <ul>
          <li>Limited to food experiences without broader travel planning tools.</li>
          <li>Availability may vary by location, potentially limiting options in less-touristy areas.</li>
          <li>Does not provide real-time updates or safety information.</li>
        </ul>
      </div>
    </div>
);

export default Competition;
