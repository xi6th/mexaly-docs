// File: src/components/Sidebar.tsx
import React, { useState, useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isDarkMode?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, isDarkMode = false }) => {
  const [activeSection, setActiveSection] = useState('overview');

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'features', 'quickstart', 'architecture', 'benefits', 'integrations'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to close sidebar when clicking on a link (mobile only)
  const handleLinkClick = () => {
    if (window.innerWidth < 1024) { // lg breakpoint
      setIsOpen(false);
    }
  };

  // Define nav items to avoid repetition
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'quickstart', label: 'Quick Start Guide' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'benefits', label: 'Business Benefits' },
    { id: 'integrations', label: 'Integrations' }
  ];

  return (
    <div className={`fixed inset-0 flex z-40 lg:hidden ${isOpen ? '' : 'pointer-events-none'}`}>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ease-in-out duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      {/* Sidebar panel */}
      <div 
        className={`relative flex-1 flex flex-col max-w-xs w-full ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } transition ease-in-out duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Documentation navigation"
      >
        {/* Close button */}
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            type="button"
            className={`ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
              isOpen ? '' : 'pointer-events-none'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Sidebar content */}
        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div className="flex-shrink-0 flex items-center px-4">
            <span className="text-xl font-bold">
              
              <a href="https://mexaly.com" target="_blank" rel="noopener noreferrer">
              <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Mexaly</span> Docs

              </a>
            </span>
          </div>
          <nav className="mt-5 px-2 space-y-1">
            {navItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={handleLinkClick}
                className={`group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  activeSection === item.id 
                    ? isDarkMode 
                      ? 'bg-gray-700 text-white' 
                      : 'bg-blue-100 text-blue-900'
                    : isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;