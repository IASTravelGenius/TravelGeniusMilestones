import React from 'react';
import './CustomerDiscoveryProcessSection.css';

const CustomerDiscoveryProcessSection = () => {
  return (
      <>
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
            <h3>Real-Time News and Updates</h3>
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
          <div className="customer-discovery-section">
              <h2>
                  <u>Food-Focused Travel</u>
              </h2>
              <p>With this problem in mind, we envisioned <strong>TravelGenius</strong> as a platform that
                  consolidates <strong>food-focused travel data</strong> and presents it in a <strong>personalized and
                      dynamic way</strong>. Our solution revolves around the following hypotheses:</p>
              <div className="customer-discovery-item">
                  <h3>Personalized Food Recommendations</h3>
                  <p>If we tailor food suggestions based on user preferences, dietary restrictions, and budget, then users will experience a more satisfying and enjoyable travel planning process focused on culinary exploration.</p>
              </div>
              <div className="customer-discovery-item">
                  <h3>Highlighting Hidden Culinary Gems</h3>
                  <p>If we give visibility to unique, lesser-known food spots such as street vendors and local specialties, then users will feel more adventurous, culturally connected, and motivated to explore authentic dining experiences.</p>
              </div>
              <div className="customer-discovery-item">
                  <h3>Budget-Friendly Dining Options</h3>
                  <p>If we emphasize affordable yet high-quality dining recommendations, then budget-conscious travelers will find greater value in the platform, improving engagement and retention.</p>
              </div>
              <h3>Customer Discovery Process - Food Focus</h3>
              <div className="customer-discovery-item">
                    <p>We conducted interviews through <strong>WhatsApp/Messenger, face-to-face meetings</strong>, and <strong>online calls</strong> to validate our food-focused hypotheses. Below are the questions we used during the interviews:</p>
              </div>
              <div className="customer-discovery-item">
                  <h3>Introduction Questions / Getting to Know the Customer</h3>
                  <ol>
                      <li>How often do you travel?</li>
                      <li>What do you enjoy most about traveling?</li>
                      <li>What role does food play in your travel experiences?</li>
                      <li>Can you describe a memorable food experience during one of your trips?</li>
                      <li>What frustrates you the most about finding places to eat when traveling?</li>
                  </ol>
              </div>
              <div className="customer-discovery-item">
                  <h3>Questions for Highlighting Hidden Culinary Gems Hypothesis</h3>
                  <p><i>Hypothesis</i>: If we tailor food suggestions based on user preferences, dietary restrictions, and budget, then users will experience a more satisfying and enjoyable travel planning process focused on culinary exploration.</p>
                  <ol>
                      <li>How do you usually find places to eat when you travel? (here try to find as much details as you can)</li>
                      <li>Do you look for specific cuisines or dietary options when planning your meals?</li>
                  </ol>
              </div>
              <div className="customer-discovery-item">
                  <h3>Questions for Highlighting Hidden Culinary Gems Hypothesis</h3>
                  <p><i>Hypothesis</i>:  If we give visibility to unique, lesser-known food spots such as street vendors and local specialties, then users will feel more adventurous, culturally connected, and motivated to explore authentic dining experiences.</p>
                  <ol>
                      <li>Do you typically stick to well-known restaurants or try to find local, lesser-known places?</li>
                      <li>What and where do you like to eat while traveling? (add more additional questions, see where they like to eat and what type of food)</li>
                      <li>What did you eat in your last travel experience?</li>
                  </ol>
              </div>
              <div className="customer-discovery-item">
                    <h3>Questions for Budget-Friendly Dining Options Hypothesis</h3>
                    <p><i>Hypothesis</i>: If we emphasize affordable yet high-quality dining recommendations, then budget-conscious travelers will find greater value in the platform, improving engagement and retention.</p>
                    <ol>
                        <li>How much money do you spend for the food budget while traveling? For example, how much money did you spend on your last trip for food?</li>
                        <li>What kind of restaurants do you go to while traveling? </li>
                    </ol>
              </div>
              <div style={{ border: '2px solid red', padding: '10px', margin: '10px 0', backgroundColor: '#fff8e1', borderRadius: '8px'}}>
                  <p>
                      Here you can find {' '}
                      <a
                          href="https://drive.google.com/drive/folders/1dAPFsyo6ZKlPI0TRzAPl-e_2TbMtfGJP?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="drive-link"
                      >
                          evidence for this validation stage
                      </a>.
                  </p>
              </div>
              <div className="customer-discovery-item">
                  <p>Based on the responses from the customer discovery process, here's the evaluation of each hypothesis:</p>
                  <ul>
                      <li><strong>Personalized Food Recommendations</strong>: This hypothesis is <strong>strongly validated</strong>. Users expressed interest in food suggestions based on preferences, dietary restrictions, and budgets. Many look for safe, clean, and familiar options but also enjoy exploring local specialties, indicating a need for tailored recommendations.</li>
                      <li><strong>Highlighting Hidden Culinary Gems</strong>: This hypothesis is <strong>partially validated</strong>. While some users prefer well-known and safe restaurants, others expressed interest in discovering traditional and lesser-known spots. However, accessibility to such places can be a challenge, suggesting this feature may appeal more to adventurous travelers.</li>
                      <li><strong>Budget-Friendly Dining Options</strong>: This hypothesis is <strong>strongly validated</strong>. Users emphasized budget-conscious choices, with daily food budgets ranging from 25 to 50–100 euros. Many prefer affordable yet high-quality and traditional food options, indicating strong support for this feature.</li>
                  </ul>
              </div>
                <p>Based on the responses from the participants, we concluded that travelers generally seek four main types of food options: <strong>traditional/local cuisine, fast-food</strong> and <strong>budget-friendly meals</strong>. These preferences highlight the importance of offering diverse recommendations that cater to both culinary exploration and practical considerations such as budget and convenience.</p>
          </div>
      </>
  );
};

export default CustomerDiscoveryProcessSection;
