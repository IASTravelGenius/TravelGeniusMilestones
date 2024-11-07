import React from 'react';
import './CustomerDiscoveryProcessSection.css';

const CustomerDiscoveryProcessSection = () => {
  return (
    <div className="customer-discovery-section">
      <h2>
        <u>Customer Discovery Process</u>
      </h2>
      <p>
        With most of the people, we have talked on WhatsApp/Messenger, but we also had face-to-face interviews and phone and online calls (see evidence). Here are some of the questions we used in the interviews with both occasional and frequent travelers:
      </p>

      <h3>Questions Asked:</h3>
      <ul>
        <li>"What’s the most frustrating part of planning your travels?"</li>
        <li>"What are the most important steps in planning a holiday?"</li>
        <li>"Have you ever felt unsafe while traveling? What led to that experience?"</li>
        <li>"What aspects of travel planning do you wish were more personalized?"</li>
        <li>"Have you come across a hidden gem while traveling? How did you find it?"</li>
        <li>"What’s the most overwhelming part of gathering travel information?"</li>
        <li>"When you have too much information about a destination, how do you decide what to focus on?"</li>
      </ul>

      <p>Moreover, for tour guides, we asked the following questions:</p>
      <ul>
        <li>"What’s the hardest part about managing a tour group?"</li>
        <li>"How do you assess the safety of the places you take tourists? Are there specific sources or criteria you rely on?"</li>
        <li>"Have you discovered any lesser-known spots that you love showing to tourists? How did you find out about them?"</li>
        <li>"How many resources or apps do you use to plan a tour? Can you tell me what that process is like?"</li>
      </ul>

      <h3>Additional Evidence</h3>
      <p>
        As part of our customer discovery process, we collected detailed conversations with participants through various channels. You can access the full collection of these conversations using the link below:
      </p>
      <a 
        href="https://drive.google.com/drive/folders/1XdHIyW1QIM1a9W_p57Sn93bI-oQtxRIO?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className="drive-link"
      >
        View Customer Discovery Conversations
      </a>

      <h3>What We Found Out:</h3>
      <p>
        Through these interviews and discussions, we identified several common pain points:
      </p>
      <ul>
        <li><strong>Complicated Planning</strong> – Many users reported difficulties in selecting the best objectives and organizing their routes. There’s a desire to maximize limited time during city breaks, but this becomes challenging due to the large volume of information and lack of trust in general recommendations.</li>
        <li><strong>Crowding and Safety Issues</strong> – Users sometimes find themselves in less safe or overly crowded areas, especially in the evening, without intending to. Many expressed a desire for a platform that could alert them to both the safety level and crowd density of areas.</li>
        <li><strong>Limited Personalization in Existing Apps</strong> – Some interviewees expressed a desire for more personalized travel options, such as the ability to avoid specific types of attractions or see only locations that match their interests.</li>
        <li><strong>Discovering Unique Spots (Hidden Gems)</strong> – Many travelers struggled to find lesser-known, unique places. This presents an opportunity for the platform to promote such hidden gems, which are often missed on mainstream platforms.</li>
      </ul>

      <h3>How It Affected Our Product:</h3>
      <ul>
        <li><strong>Advanced Personalized Recommendations</strong> – We will enhance our platform with destination filters based on user preferences, past travel reviews, and factors like safety, crowdedness, and affordability.</li>
        <li><strong>Crowding and Safety Alerts</strong> – We will offer real-time updates on safety levels and crowd density, helping users avoid overcrowded or unsafe areas, especially in unfamiliar destinations.</li>
        <li><strong>Promotion of Unique Places</strong> – The platform will feature a dedicated section for hidden gems, with recommendations based on local insights and user feedback.</li>
      </ul>
    </div>
  );
};

export default CustomerDiscoveryProcessSection;
