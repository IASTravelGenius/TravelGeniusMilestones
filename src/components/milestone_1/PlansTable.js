import React from 'react';

const PlansTable = () => (
  <table className="plans-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Free Version</th>
        <th>Premium Version</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Basic Travel Recommendations</td>
        <td>✅ Yes</td>
        <td>✅ Yes</td>
      </tr>
      <tr>
        <td>Hidden Gems Discovery</td>
        <td>✅ Limited Access</td>
        <td>✅ Full Access</td>
      </tr>
      <tr>
        <td>Real-Time Safety Alerts</td>
        <td>✅ Included</td>
        <td>✅ Included</td>
      </tr>
      <tr>
        <td>Crowd-Level Insights</td>
        <td>❌ Not Included</td>
        <td>✅ Included</td>
      </tr>
      <tr>
        <td>Personalized Travel Itineraries</td>
        <td>❌ Basic Suggestions Only</td>
        <td>✅ Fully Customized Itineraries</td>
      </tr>
      <tr>
        <td>Dynamic Ratings</td>
        <td>❌ Not Included</td>
        <td>✅ Included</td>
      </tr>
      <tr>
        <td>Budget-Friendly Destination Filters</td>
        <td>✅ Yes</td>
        <td>✅ Advanced Filters</td>
      </tr>
      <tr>
        <td>Travel History and Preferences</td>
        <td>❌ Not Included</td>
        <td>✅ Saved and Used for Future Plans</td>
      </tr>
      <tr>
        <td>Ad-Free Experience</td>
        <td>❌ Not Included</td>
        <td>✅ Included</td>
      </tr>
    </tbody>
  </table>
);

export default PlansTable;