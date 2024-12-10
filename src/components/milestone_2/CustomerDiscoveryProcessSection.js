import React from 'react';
import './CustomerDiscoveryProcessSection.css';

const CustomerDiscoveryProcessSection = () => {
  return (
    <div className="customer-discovery-section">
      <h2>
        <u>Customer Discovery Process</u>
      </h2>
      <p>
      With most of the people, we have talked on <strong>WhatsApp/Messenger</strong>, but we also had <strong>face-to-face interviews</strong> and <strong>phone and online calls</strong>(see evidence). Here are some of the questions we used in the interviews with both occasional and frequent travelers:
      </p>
      <del>
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
      </del>
      <del>
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
      </del>
      <div className="customer-discovery-item">
        <h3>Introduction questions / knowing more about the possible customer</h3>
        <ul>
          <li>How often do you travel?</li>
          <li>What do you like about travelling? What do you find frustrating about travelling? (maybe you can ask them to describe a situation)</li>
        </ul>
      </div>
      <div className="customer-discovery-item">
        <h3>Questions for personalised destination recommendations hypothesis</h3>
        <ul>
          <li>How do you find your next holiday destination? / How do you find tourist attractions for your trip?</li>
          <li>What are the struggles you have while planning a trip? / What are the most important steps in planning a  holiday?</li>
          <li>When you're looking for a vacation spot, what’s most important to you when making your decision?</li>
        </ul>
      </div>
      <div className="customer-discovery-item">
        <h3>Questions for Highlighting Hidden Gems hypothesis</h3>
        <ul>
          <li>What tourist attractions have you visited in your last 2-3 city breaks/holidays? Follow-up: how would you categorise them: well known destinations or less popular places?</li>
        </ul>
      </div>
      <div className="customer-discovery-item">
        <h3>Questions for real-time news and updates hypothesis</h3>
        <ul>
          <li>When you're planning a trip, what kind of information do you wish you had more access to before you go?</li>
          <li>When you travel to a new place, how do you stay informed about what's happening locally?</li>
        </ul>
      </div>
      <div className="customer-discovery-item">
        <h3>Questions for safety focus hypothesis</h3>
        <ul>
          <li>Can you describe to me an unpleasant experience during a trip? (try observe if safety concerns is one of them)</li>
        </ul>
      </div>

      <div style={{ border: '2px solid red', padding: '10px', margin: '10px 0', backgroundColor: '#fff8e1', borderRadius: '8px'}}>
        <p>
          Here you can find a{' '}
          <a
            href="https://docs.google.com/spreadsheets/d/1N442lqUI04Cn6aSD-JtdxZwaXG6fp-Jlw1kEEzRq3QU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="drive-link"
          >
            summary of our interviews
          </a>.
        </p>
        <p>
          Here you can find{' '}
          <a
            href="https://drive.google.com/drive/folders/1euLar9qbe8lrHO7PnuswDiXHfvm_rHEp?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="drive-link"
          >
            evidence for our interviews
          </a>.
        </p>
      </div>

      <p>
        Among the hypotheses, <strong>Personalization of Destination Recommendations</strong> and <strong>Real-Time News and Updates</strong> emerged as the most highly favored by respondents.
      </p>

      <div className="customer-discovery-item">
        <h3>Personalization of Destination Recommendations</h3>
        <ul>
          <li>Travelers frequently expressed frustration with the effort required to plan trips using multiple, fragmented tools.</li>
          <li>Many respondents desired a single platform offering tailored itineraries, personalized recommendations, and filters for budget, preferences, and destinations.</li>
          <li>This feature resonated strongly with most participants, addressing a core pain point in trip planning.</li>
        </ul>
      </div>
      <div className="customer-discovery-item">
        <h3>Personalization of Destination Recommendations</h3>
        <ul>
          <li>Access to timely information such as safety alerts, attraction schedules, and local events was a highly valued feature.</li>
          <li>Several participants noted missed opportunities or challenges due to the absence of reliable real-time updates.</li>
          <li>This feature was seen as a game-changer for making travel experiences smoother and reducing uncertainties.</li>
        </ul>
      </div>
      
      <h4>Other Hypotheses</h4>
      <div className="customer-discovery-item">
        <h3>Highlighting Hidden Gems</h3>
        <ul>
          <li>While some respondents appreciated the idea of discovering unique and lesser-known attractions, it was not a priority for the majority.</li>
          <li>Many travelers focused more on ensuring their trips were efficient and well-organized rather than emphasizing unique experiences. However, this feature could complement personalization to enhance overall value.</li>
        </ul>
      </div>
      <div className="customer-discovery-item">
        <h3>Safety Focus</h3>
        <ul>
          <li>Safety was an important concern, particularly for solo travelers and women, but it was less frequently mentioned as a primary issue compared to personalization and real-time updates.</li>
          <li>Respondents noted incidents like theft, poor accommodations, or unsafe neighborhoods but considered this a supplementary need rather than a standalone focus.</li>
        </ul>
      </div>
      <div className="customer-discovery-item">
        <h3>Additional Insight: Food in Travel</h3>
        <p>
          A recurring theme in the feedback was the importance of food in travel. Many respondents expressed enthusiasm for discovering local cuisines, avoiding tourist traps, and exploring authentic dining experiences. Highlighting food-related recommendations, such as unique restaurants, street food spots, and regional specialties, would significantly enhance the personalization and discovery aspects of the platform.
        </p>
      </div>

      <h2>Conclusion</h2>
      <p>
        The findings suggest prioritizing <strong>Personalization of Destination Recommendations</strong> and <strong>Real-Time News and Updates</strong>, as these address the most pressing traveler pain points. <strong>Highlighting Hidden Gems</strong> and <strong>Safety Focus</strong> should be integrated as secondary features to enhance the platform’s value, offering a well-rounded solution while emphasizing the most sought-after functionalities.
      </p>
    </div>
  );
};

export default CustomerDiscoveryProcessSection;
