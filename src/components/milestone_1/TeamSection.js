import React from 'react';
import './TeamSection.css';
import ciurea from '../../images/ciurea.jpeg'
import lungu from '../../images/lungu.jpeg'
import radu from '../../images/radu.jpeg'
import anghel from '../../images/anghel.jpeg'
import daria from '../../images/daria.jpg'

const teamMembers = [
  {
    name: 'Robert Ciurea',
    role: 'Product Manager',
    image: ciurea, // Replace with the correct path to the image
  },
  {
    name: 'Daria Florea',
    role: 'UX/UI Designer',
    image: daria, // Replace with the correct path to the image
  },
  {
    name: 'Andrei Anghel',
    role: 'Backend Developer',
    image: anghel, // Replace with the correct path to the image
  },
  {
    name: 'Alexandru Lungu',
    role: 'Frontend Developer',
    image: lungu, // Replace with the correct path to the image
  },
  {
    name: 'Radu Serb',
    role: 'QA Engineer',
    image: radu, // Replace with the correct path to the image
  },
];

const TeamSection = () => (
  <div className="team-section">
    <h2>TEAM</h2>
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <img src={member.image} alt={member.name} className="team-photo" />
          <h3>{member.name}</h3>
          <p className="team-role">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TeamSection;
