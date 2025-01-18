import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => (
  <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow z-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="text-xl font-bold text-blue-600">AutoCare Workshop</div>
        <div className="flex space-x-8">
          {['services', 'about', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-3 ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;