import React from "react";
import "./SalePlan.css";
import image1 from "../../images/report1.png";
import image2 from "../../images/report2.png";

const SalePlan = () => {
    return (
        <div className="sale-plan">
            <h2>First Sale Plan</h2>
            <div className="sale-plan-item">
                <h3>Objective:</h3>
                <p>To get users to test the MVP of <strong>TravelGenius</strong>, gather feedback, and validate the platform’s value through user engagement, feedback forms, and analytics.</p>
            </div>
            <div className="sale-plan-item">
                <h3>Approach</h3>
                <div className="sale-plan-item2">
                    <h4>Social Media Promotion</h4>
                    <ul>
                        <li>
                            <strong>Instagram Campaign:</strong>
                            <br/>
                            <br/>
                            <ul>
                                <li>Post engaging content promoting <strong>TravelGenius</strong> and its features, focusing on <strong>personalized food recommendations</strong> and <strong>hidden culinary gems</strong>.</li>
                                <li>Include calls-to-action directing followers to test the MVP via our website link.</li>
                                <li>Use polls, quizzes, and interactive stories to generate interest and collect preliminary feedback.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>WhatsApp Outreach:</strong>
                            <br/>
                            <br/>
                            <ul>
                                <li>Share the MVP link and key features in dedicated WhatsApp groups with potential users.</li>
                                <li>Send personalized messages to targeted audiences, encouraging them to test the platform and share their feedback.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="sale-plan-item2">
                    <h4>User Feedback Collection</h4>
                    <ul>
                        <li>
                            <strong>Interviews:</strong>
                            <br/>
                            <br/>
                            <ul>
                                <li>Conduct one-on-one interviews with selected users to gather in-depth feedback about their experience using the MVP.</li>
                                <li>Focus questions on usability, food recommendations, and overall satisfaction.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Online Forms and Surveys:</strong>
                            <br/>
                            <br/>
                            <ul>
                                <li>Distribute feedback forms and surveys through social media and WhatsApp to reach a wider audience.</li>
                                <li>Questions will focus on ease of use, relevance of recommendations, and suggestions for improvement.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="sale-plan-item2">
                    <h4>Analytics Tracking (PostHog)</h4>
                    <ul>
                        <li>
                            <strong>Use PostHog to track:</strong>
                            <br/>
                            <br/>
                            <ul>
                                <li>User engagement (time spent on site, scrolling behavior).</li>
                                <li>Interaction with food recommendations, filters, and customization tools.</li>
                                <li>Completion rates for key actions, such as saving itineraries or signing up for newsletters.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Analyze data to identify pain points and areas for improvement.</strong>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sale-plan-item">
                <h3>Key Outcomes Expected</h3>
                <div className="sale-plan-item2">
                    <ul>
                        <li><strong>Engagement Validation:</strong> Measure interest through website visits, feedback forms, and social media interactions.</li>
                        <li><strong>Feature Validation:</strong> Assess how users engage with key features like <strong>personalized food recommendations</strong> and <strong>hidden culinary gems.</strong></li>
                        <li><strong>Data-Driven Insights:</strong> Use analytics to refine features and improve the user experience based on real usage patterns.</li>
                        <li><strong>Early Adopters:</strong>Establish a small group of committed users who can advocate for the product and provide ongoing feedback.</li>
                    </ul>
                </div>
                <div className="sale-plan-item2">
                    <p>
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://drive.google.com/drive/folders/1O07QGTXoI8n0ipyvOEjekNTYJQtQs7ym?usp=sharing">
                            Here
                        </a> you can see evidence from the first sale stage
                    </p>
                    <p>
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://forms.gle/ztEEpniv1RY7xkjh7">
                            Here
                        </a> is the form we used for feedback
                    </p>
                </div>
                <div className="sale-plan-item2">
                    <p>The feedback collected from the form responses highlights a high level of satisfaction with the MVP of TravelGenius, as indicated by consistently high ratings.</p>
                    <p>Key insights include:</p>
                    <ul>
                        <li><strong>Positive Reception for Features </strong>- The most valued features are custom food recommendations and the travel ideas generator, which align well with the platform's focus on culinary exploration and personalized suggestions.</li>
                        <li><strong>Opportunities for Improvement </strong>- While most respondents did not indicate immediate enhancements, this suggests the MVP effectively addresses initial user needs, but ongoing feedback collection is essential to identify evolving requirements.</li>
                    </ul>
                    <p>Overall, the results validate the platform’s core value proposition, confirming that personalized recommendations and exploratory tools resonate with users. Further refinements can focus on expanding the food recommendation database and improving usability to sustain engagement.</p>
                    <img src={image1} alt="Report 1" className="sale-plan-image"/>
                    <p>Based on the <strong>PostHog analysis</strong>, the majority of users accessed the platform through Instagram, indicating that it is a highly effective channel for promotion.</p>
                    <img src={image2} alt="Report 2" className="sale-plan-image"/>
                    <p>Moreover, mobile users experienced a more challenging navigation flow, highlighting the need to update and optimize the UI for mobile devices.</p>
                </div>
            </div>
        </div>
    );
}

export default SalePlan;