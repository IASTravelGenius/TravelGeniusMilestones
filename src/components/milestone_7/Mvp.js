import React from 'react';
import './Mvp.css';
import image1 from '../../images/mvp1.png';
import image2 from '../../images/mvp2.png';
import image3 from '../../images/mvp3.png';
import image4 from '../../images/mvp4.png';

const Mvp = () => {
    return (
        <div className="mvp">
            <h2><a target="_blank" rel="noopener noreferrer"
                   href="https://iastravelgenius.github.io/TravelGeniusFrontend/">MVP</a></h2>
            <p>During the initial validation stage, we found that many respondents wanted a single platform that
                provides tailored itineraries and <strong>personalized recommendations</strong> to simplify their travel
                planning process.</p>
            <p>To meet this need, our MVP includes a feature that allows users to describe their desired travel
                experience. Based on their input, the app generates personalized destination suggestions, making trip
                planning more intuitive and customized. These features are illustrated in the next screenshots.</p>
            <img src={image1} alt="Mvp 1" className="mvp-image"/>
            <img src={image2} alt="Mvp 2" className="mvp-image"/>
            <p>Moreover, in the initial validation stage, we discovered as well that <strong>food is a key
                priority</strong> for many travelers during their trips. Based on this insight, we decided to focus on
                the food aspect of our project</p>
            <p>We introduced a feature that generates <strong>personalized food recommendations</strong> tailored to
                user preferences, enabling travelers to explore authentic dining experiences and discover unique
                culinary spots. From the results of the second validation, we concluded that the types of food most
                sought after by tourists during vacations are <strong>traditional/local cuisine, fast-food</strong>,
                and <strong>budget-friendly meals.</strong></p>
            <img src={image3} alt="Mvp 3" className="mvp-image"/>
            <img src={image4} alt="Mvp 4" className="mvp-image"/>
        </div>
    );
}

export default Mvp;