import React from 'react';
import './MarketResearch.css';
import EstimationTable from "./EstimationTable";

const MarketResearch = () => {
    return (
        <div className="market-research">
            <h2>Market Research</h2>
            <div className="market-research-item">
                <p>Our target market consists of travelers who are interested in food in addition to sightseeing. This
                    can be a broad audience, as 95% of travelers can be classed as food travelers according to the
                    article <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://www.jerseyislandholidays.com/food-tourism-statistics/#:~:text=95%25%20of%20travelers%20around%20the%20world%20can%20now%20be%20classed,the%20food%20and%20drink%20there.">60+
                        Food Tourism Statistics & Facts (2023): What is Food Tourism?</a>, but some specific
                    demographics to target include:</p>
                <ul>
                    <li><strong>Foodies: </strong>People with a strong interest in trying new and exciting cuisines.</li>
                    <li><strong>Adventurous eaters: </strong>People who are open to trying new foods and flavors.</li>
                    <li><strong>Culturally curious travelers: </strong>People who are interested in learning about different cultures through their food.</li>
                    <li><strong>Health-conscious travelers: </strong>People who are looking for healthy and sustainable dining options.</li>
                    <li><strong>Couples and families: </strong>Groups looking for kid-friendly or couple-specific food recommendations.</li>
                    <li><strong>Luxury travelers: </strong>Those willing to pay for high-end dining experiences.</li>
                    <li><strong>Backpackers and budget travelers: </strong>Seeking budget-friendly yet delicious options.</li>
                </ul>
                <p>
                    The global culinary tourism market was valued at USD 1 trillion in 2023 and is projected to reach USD 4 trillion by 2033, based on the information taken from
                    <a target="_blank" rel="noopener noreferrer" href="https://www.expertmarketresearch.com/reports/gastronomy-food-tourism-market">Gastronomy/Food Tourism Market Size & Share | Report, 2034</a>,
                    <a target="_blank" rel="noopener noreferrer" href="https://www.futuremarketinsights.com/reports/food-tourism-sector-overview-and-forecast">Food Tourism Sector Market Size, Share & Forecast 2033 | FMI</a>,
                    <a target="_blank" rel="noopener noreferrer" href="https://www.imarcgroup.com/culinary-tourism-market">Culinary Tourism Market Size, Statistics & Forecast, 2033</a>. This suggests that there is a large and growing market for food-focused travel experiences.
                </p>
            </div>
            <div className="market-research-item">
                <h3>Competitors</h3>
                <p>Being an industry that has such a potential in the future, there are plenty of competitors, offering a lot of <strong>diverse
                    and unique</strong> experiences for any type of traveler. These are the potential competitors in the
                        culinary tourism market:</p>
                <ul>
                    <li><strong>Food Tour Companies: </strong>These companies offer guided tours that take travelers to different restaurants and food markets in a particular city or region.</li>
                    <li><strong>Cooking Classes and Workshops: </strong>These companies offer cooking classes that teach travelers how to prepare local dishes.</li>
                    <li><strong>Food Blogs and Influencers: </strong>There are many social media influencers who focus on food and travel. These influencers can inspire people to travel to new destinations and try new foods.</li>
                    <li><strong>Travel websites and apps: </strong>Many travel websites and apps now include information about food and restaurants. Some of them also offer features that allow travelers to book food tours and cooking classes.
                        <br/><br/>The main players when we are talking about websites are:
                        <ul>
                            <li><strong>Tripadvisor: </strong>As one of the largest travel and food review platforms, Tripadvisor has millions of monthly users. It's estimated that Tripadvisor commands a significant portion of online travel market share, with more than <strong>490 million unique monthly visitors</strong>. However, its share of the food tourism market is unclear.</li>
                            <li><strong>Yelp: </strong>While primarily focused on local businesses in the U.S., Yelp is popular worldwide and also competes in the travel-food space. Yelp has over 50 million reviews globally.</li>
                            <li><strong>Zomato: </strong>Zomato has a strong presence in India, the Middle East, and parts of Southeast Asia</li>
                            <li><strong>Google Travel: </strong>As a search engine giant, Google likely dominates a major portion of the online food travel industry with its restaurant listings and local guides.</li>
                            <li><strong>Airbnb Experiences: </strong>Airbnb has been rapidly expanding into food tourism and local culinary experiences, particularly in Europe, with a projected <strong>growth rate of 20%</strong> in food-related bookings.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="market-research-item">
                <h3>Market Share</h3>
                <p>It’s difficult to say for sure what the market share of each competitor is, but some general aspects are:</p>
                <ul>
                    <li>Food tour companies are likely to have a large share of the market, as they offer a convenient and curated way for travelers to experience a destination's food scene.</li>
                    <li>Cooking class companies are likely to have a smaller share of the market, but they can be a good option for travelers who want to learn more about a particular cuisine.</li>
                    <li>Social media influencers can have a significant impact on the market, but their influence is likely to be short-lived.</li>
                    <li>Travel websites and apps are likely to have a growing share of the market, as they offer a convenient way for travelers to find information about food and restaurants.</li>
                </ul>
                <h3>Our estimations</h3>
                <p>Based on our estimation, the target market consists of 400 millions users monthly. However, we assume that only 50% of them would search more actively for types of food and places to eat, which means that our real audience is 200 million users monthly. We propose by the 5th year, our app should have at least 3.5 million visits a year. Here is a breakdown of how we plan to achieve this:</p>
                <ul>
                    <li>Our available plans are: 5$/3 months, 8$/6 months, 12$/1 year</li>
                    <li>We will consider a conversion rate to paid plans of 5%</li>
                </ul>
                <EstimationTable />
                <p>Based on the above estimates, if our platform effectively taps into the food tourism market, the business has significant potential for growth, not to mention the expand of the offering beyond food recommendations (e.g., offering culinary tours, cooking classes, etc.).
                    <br/><br/><strong>Key challenges will include:</strong>
                </p>
                <ul>
                    <li>Building a user base and brand awareness</li>
                    <li>Competing with large, established players</li>
                    <li>Ensuring continuous innovation and value for travelers.</li>
                </ul>
            </div>
        </div>
    );
}

export default MarketResearch;