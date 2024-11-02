import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setSelectedSection }) => {
  const sections = [
    { name: 'Milestone 1', id: 'milestone1' },
    { name: 'Milestone 2', id: 'milestone2' }
  ];

  return (
    <div className="sidebar">
      <h2>TravelGenius</h2>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} onClick={() => setSelectedSection(section.name)}>
              {section.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
