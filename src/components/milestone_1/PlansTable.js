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
        <td>Hidden Culinary Gems Discovery</td>
        <td>✅ Limited Access</td>
        <td>✅ Full Access</td>
      </tr>
      <tr>
        <td><del>Real-Time Safety Alerts</del></td>
        <td><del>✅ Included</del></td>
        <td><del>✅ Included</del></td>
      </tr>
      <tr>
        <td><del>Crowd-Level Insights</del></td>
        <td><del>❌ Not Included</del></td>
        <td><del>✅ Included</del></td>
      </tr>
      <tr>
        <td>Personalized Food Travel Recommendations</td>
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