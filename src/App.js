import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

function App() {
  const [selectedSection, setSelectedSection] = useState('Milestone 1');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(true); // Show sidebar by default on larger screens
      } else {
        setSidebarOpen(false); // Hide sidebar by default on mobile
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      <h1 className="mobile-title">TravelGenius</h1> {/* Title visible only on mobile */}
      {sidebarOpen && <Sidebar setSelectedSection={setSelectedSection} />}
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
