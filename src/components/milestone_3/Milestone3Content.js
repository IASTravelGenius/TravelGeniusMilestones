import React from 'react';
import LandingPageLink from './LandingPageLink';
import FigmaPrototypeEmbed from './FigmaPrototypeEmbed';
import './Milestone3Content.css';

const Milestone3Content = () => (
  <div className="milestone3-content">
    <h1 className="milestone-title">Milestone 3</h1>
    <LandingPageLink url="https://iastravelgenius.github.io/TravelGeniusFrontend/" />
    <FigmaPrototypeEmbed title="Figma Mockup" embedUrl="https://embed.figma.com/design/Mfh0W1reglGvRZ4lJWdofu/TravelGenius?node-id=0-1&embed-host=share" />
    <FigmaPrototypeEmbed title="Figma Prototype" embedUrl="https://embed.figma.com/proto/Mfh0W1reglGvRZ4lJWdofu/TravelGenius?node-id=1-2&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=share"   />
  </div>
);

export default Milestone3Content;
