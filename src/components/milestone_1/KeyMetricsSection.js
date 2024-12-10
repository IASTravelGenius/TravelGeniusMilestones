import React from 'react';
import './KeyMetricsSection.css';

const KeyMetricsSection = () => {
  const [visibleGeneralCard, setVisibleGeneralCard] = React.useState(null);
  const [visibleKeyCard, setVisibleKeyCard] = React.useState(null);

  const toggleGeneralVisibility = (index) => {
    setVisibleGeneralCard(visibleGeneralCard === index ? null : index);
  };

  const toggleKeyVisibility = (index) => {
    setVisibleKeyCard(visibleKeyCard === index ? null : index);
  };

  const generalMetrics = [
    'Customer retention rate',
    'User growth rate',
    'Conversion rate to premium'
  ];

  const hiddenGeneralTexts = [
    'Tracking the number of new sign-ups and active users on a daily/weekly/monthly basis.',
    'Measuring how many users return to the platform, especially those who use personalized features or convert to premium.',
    'Measuring the percentage of users who upgrade to a premium subscription plan.'
  ];

  const keyMetrics = [
    'Safety Rating Impact',
    'Personalization Engagement Rate',
    'Budget Optimization Metrics',
    'Dynamic Ratings Usage'
  ];

  const hiddenKeyTexts = [
    'I. Measures how the inclusion of safety insights affects users\' destination choices.\n\nII. Comparison with Competitors: Competitors like TripAdvisor and Google Travel lack robust safety-focused recommendations or real-time updates on safety levels.',
    'I. Measures the percentage of users actively using filters and customization features for planning trips.\n\nII. Comparison with Competitors: Competitors rely heavily on broad categories; personalized, adaptive suggestions like yours are a distinct advantage.',
    'I. Tracks how often users engage with budget-friendly options, such as affordable attractions and accommodations.\n\nII. Comparison with Competitors: Google Travel and Booking.com focus on showing pricing but lack a tailored budget optimization experience.',
    'I. Monitors how often users interact with dynamically updated ratings based on seasonal trends, local popularity, and real-time data.\n\nII. Comparison with Competitors: TripAdvisor and Google Travel feature user-generated ratings, but these are static and do not adapt to changing conditions.'
  ];

  return (
    <div className="key-metrics-section">
      <h2>6. Key Metrics</h2>
      <div className="metric-item">
        <h3>General Metrics</h3>
        <div className="metrics-container">
          {generalMetrics.map((metric, index) => (
            <React.Fragment key={index}>
              <div className="metric-card" onClick={() => toggleGeneralVisibility(index)}>
                {metric}
              </div>
              {visibleGeneralCard === index && (
                <div className="hidden-text">
                  {hiddenGeneralTexts[index]}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="metric-item">
        <h3>Key Metrics</h3>
        <div className="metrics-container">
          {keyMetrics.map((metric, index) => (
            <React.Fragment key={index}>
              <div className="metric-card" onClick={() => toggleKeyVisibility(index)}>
                {metric}
              </div>
              {visibleKeyCard === index && (
                <div className="hidden-text">
                  {hiddenKeyTexts[index]}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyMetricsSection;
