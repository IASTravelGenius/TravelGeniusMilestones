import React, {useState, useEffect, useRef} from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

function App() {
    const [selectedSection, setSelectedSection] = useState('Milestone 1');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const handleClickOutside = (event) => {
        if (window.innerWidth <= 768 && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarOpen(false);
        }
    };

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
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="app-container">
            <h1 className="mobile-title">TravelGenius</h1> {/* Title visible only on mobile */}
            <button className="toggle-sidebar-button" onClick={toggleSidebar}>
                &#9776; {/* Burger menu icon */}
            </button>
            {sidebarOpen && (
                <div ref={sidebarRef}>
                    <Sidebar setSelectedSection={setSelectedSection} setSidebarOpen={setSidebarOpen}/>
                </div>
            )}
            <div className={`content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <Content/>
            </div>
        </div>
    );
}

export default App;