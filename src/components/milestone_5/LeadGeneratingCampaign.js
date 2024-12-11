import React from 'react';
import './LeadGeneratingCampaign.css';
import newsletter from '../../images/newsletter.png'

const LeadGeneratingCampaign = () => {
  return (
    <div className="lead-generating-campaign">
      <h2>Lead Generating Campaign</h2>
      <h4>Objective:</h4>
      <p>To boost brand awareness and engage with potential customers through a strategic multi-channel social media outreach campaign leveraging Facebook, Instagram, and WhatsApp/Messenger.</p>
      <div className="lead-generating-item">
          <h3>Key Campaign Elements</h3>
          <ol>
            <li><strong>Newsletter Subscription:</strong>
                <ul>
                    <li>
                        Added a newsletter subscription feature to our website to capture and retain potential customers interested in travel updates and exclusive offers.
                        <img src={newsletter} alt="Lead Generating Image" className="lead-generating-image"></img>
                    </li>
                    
                </ul>
            </li>
            <li><strong>Instagram Page:</strong>
                <ul>
                    <li>Launched our dedicated Instagram page: <a href="https://www.instagram.com/travel_genius_app/profilecard/?igsh=bHJscG56N2tuNzRh" target="_blank" rel="noopener noreferrer">TravelGenius</a></li>
                    <li>Shared engaging content about our application, its features, and benefits.</li>
                    <li>Included our website link in posts and bio to encourage followers to test the platform and provide feedback.</li>
                </ul>
            </li>
            <li><strong>Facebook Page and Groups:</strong>
                <ul>
                    <li>Created a <a href="https://www.facebook.com/share/1ApugJABDk/" target="_blank" rel="noopener noreferrer">Facebook page</a> to reach a broader audience and share updates about TravelGenius</li>
                    <li>Actively participated in travel-related Facebook groups, posting relevant content to spark conversations and attract potential customers.</li>
                </ul>
            </li>
            <li><strong>WhatsApp Outreach:</strong>
                <ul>
                    <li>Sent personalized messages to dedicated WhatsApp groups containing potential customers, sharing key information about the application and encouraging engagement.</li>
                </ul>
            </li>
          </ol>
        </div>
        <div className="lead-generating-item">
            <h3>Campaign Tracking</h3>
            <p>For detailed evidence and progress updates on this lead generation campaign, refer to the following link:<br/>
                <a href="https://drive.google.com/drive/folders/1ruzT5qscAzRKTfPVh0RaqwtjdRSUa9tP?usp=drive_link" target="_blank" rel="noopener noreferrer">Lead Generation Campaign Tracker</a><br/><br/>
                By combining these strategic actions, we aim to build an engaged community of early adopters and gather valuable feedback for future development.
            </p>
        </div>
    </div>
  );
};

export default LeadGeneratingCampaign;
