import React from 'react';
import './BalsamiqComponent.css';

const BalsamiqComponent = () => {
    return (
        <div className="balsamiq-component">
            <h2>Balsamiq Wireframes - NEW</h2>
            <div style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '62.5%' }}>
                <iframe 
                    src="https://static.balsamiq.cloud/1602/embed/index.html?i=https%3A%2F%2Fshare.balsamiq.com%2Fc%2F4Sspx26JKyMfi1oi3VrbYn.jpg" 
                    style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }} 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default BalsamiqComponent;