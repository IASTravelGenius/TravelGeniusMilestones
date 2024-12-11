import React from 'react';
import './NotesOnAnalytics.css';

const NotesOnAnalytics = () => {
    return (
        <div className="notes-analytics">
            <h2>Comparison of lead channels</h2>
            <div className="notes-analytics-item">
                <h3>Insights</h3>
                <ul>
                    <li><strong>Newsletter Component: </strong>Only a few users interacted with the newsletter, suggesting it is not intuitive or visible enough.</li>
                    <li><strong>Desktop Users: </strong>Showed high engagement, scrolling through the entire page.</li>
                    <li><strong>Mobile Users: </strong>Scrolled less, indicating lower engagement or potential navigation issues.</li>
                </ul>
            </div>
            <div className="notes-analytics-item">
                <h3>Recommendations</h3>
                <ul>
                    <li><strong>Improve Newsletter Visibility: </strong>Redesign and reposition the newsletter section to make it more noticeable and appealing.</li>
                    <li><strong>Optimize for Mobile: </strong>Enhance mobile responsiveness and shorten page length for easier navigation.</li>
                    <li><strong>Add Engagement Triggers: </strong>Use pop-ups, banners, or sticky navigation to highlight key components like the newsletter.</li>
                </ul>
                <p>These updates can boost engagement and improve mobile user experience.</p>
            </div>
            <div className="notes-analytics-item">
                <h3>Proof</h3>
                <ul>
                    <li>
                        <a href="https://drive.google.com/drive/folders/1DDm8IgKqy8G6zZbsGfxQ3EM_rZtlBeZr?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>Facebook</strong></a>
                        <ul>
                            <li><a href="https://www.facebook.com/share/p/1EopxE7sAq/?mibextid=WC7FNe" target="_blank" rel="noopener noreferrer">Post 1</a></li>
                            <li><a href="https://www.facebook.com/share/p/15M9yKzZ1B/" target="_blank" rel="noopener noreferrer">Post 2</a></li>
                            <li><a href="https://www.facebook.com/share/p/18JWX7QTen/" target="_blank" rel="noopener noreferrer">Post 3</a></li>
                        </ul>
                    </li>
                    <li><a href="https://drive.google.com/drive/folders/1MCpLARU6MsIlTSzu1p4J3Y6_t8_I2UqG?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>Instagram</strong></a></li>
                    <li><a href="https://drive.google.com/drive/folders/1Ji8m3xU2AuA035MRTWXYFPK_wW-cK8_n?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>WhatsApp</strong></a></li>
                    <li><a href="https://drive.google.com/file/d/1qzh_qfiJytwXTiM3u1kBrW5Z3LYwbFoO/view?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>Posthog Analytics</strong></a></li>
                    <li><a href="https://drive.google.com/file/d/1ReS1LvzKlHuy165_ETndigJjUGr_kq5k/view?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>Our newsletter subscribers</strong></a></li>
                </ul>
            </div>
        </div>
    );
}

export default NotesOnAnalytics;