import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setSelectedSection, setSidebarOpen }) => {
    const sections = [
        { name: 'Milestone 1', id: 'milestone1' },
        { name: 'Milestone 2', id: 'milestone2' },
        { name: 'Milestone 3', id: 'milestone3' },
        { name: 'Milestone 4', id: 'milestone4' },
        { name: 'Milestone 5', id: 'milestone5' },
        { name: 'Milestone 6', id: 'milestone6' },
        { name: 'Milestone 7', id: 'milestone7' },
        { name: 'Milestone 8', id: 'milestone8' },
    ];

    const handleSectionClick = (sectionName) => {
        setSelectedSection(sectionName);
        if (window.innerWidth <= 768) {
            setSidebarOpen(false);
        }
    };

    return (
        <div className="sidebar">
            <h2>TravelGenius</h2>
            <ul>
                {sections.map((section) => (
                    <li key={section.id}>
                        <a href={`#${section.id}`} onClick={() => handleSectionClick(section.name)}>
                            {section.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;