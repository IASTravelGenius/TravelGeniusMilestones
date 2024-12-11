import React from 'react';
import './ComparisonLeadChannels.css';

const ComparisonLeadChannels = () => {
    return (
        <div className="comparison-lead-channels">
            <h2>Comparison of lead channels</h2>
            <div className="comparison-lead-channels-item">
                <h3>Platform Performance Comparison</h3>
                <ol>
                    <li><strong>Instagram:</strong>
                        <ul>
                            <li><strong>Performance: </strong>Highest reach and engagement.</li>
                            <li>
                                <strong>Why it works: </strong>
                                <ul>
                                    <li>Visual content resonates well with Instagram’s travel-enthusiast audience.</li>
                                    <li>Features like Stories, Reels, and interactive polls allow us to engage dynamically with potential users.</li>
                                    <li>Our posts and website links have driven substantial traffic and interactions.</li>
                                </ul>
                            </li>
                            <li><strong>Key Metric Highlight: </strong>Best-performing platform in terms of audience interaction and user feedback.</li>
                        </ul>
                    </li>
                    <li><strong>WhatsApp:</strong>
                        <ul>
                            <li><strong>Performance: </strong>Moderate reach but highly targeted and personalized.</li>
                            <li>
                                <strong>Why it works: </strong>
                                <ul>
                                    <li>Direct messaging allows for more intimate and meaningful conversations with potential customers.</li>
                                    <li>High response rates in dedicated WhatsApp groups.</li>
                                </ul>
                            </li>
                            <li><strong>Key Metric Highlight: </strong>Strong for building close connections and collecting detailed user feedback.</li>
                        </ul>
                    </li>
                    <li><strong>Facebook:</strong>
                        <ul>
                            <li><strong>Performance: </strong>Least reach among the platforms.</li>
                            <li>
                                <strong>Why it lags: </strong>
                                <ul>
                                    <li>Content visibility in Facebook groups is limited due to algorithm constraints and competition.</li>
                                    <li>Travel-related discussions in Facebook groups tend to have lower engagement than on Instagram.</li>
                                </ul>
                            </li>
                            <li><strong>Key Metric Highlight: </strong>Serves as a supporting platform for awareness but lacks the engagement seen on Instagram.</li>
                        </ul>
                    </li>
                </ol>
            </div>
            <div className="lead-generating-item">
                <h3>Conclusion</h3>
                <p>Instagram stands out as the top-performing platform for increasing awareness and driving engagement, while WhatsApp excels in fostering personalized interactions. Facebook, though useful for supplementary exposure, currently has the least impact on our campaign.</p>
            </div>
        </div>
    );
}

export default ComparisonLeadChannels;