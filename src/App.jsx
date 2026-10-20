import React, { useState } from 'react';
import Navbar from './components/navbar/navbar'; // ध्यान दें: पथ (path) आपके फ़ोल्डर स्ट्रक्चर के अनुसार सही होना चाहिए

// Main Website Layout Component
function MainLayout() {
  // 1. स्टेट वेरिएबल्स को डिफाइन किया गया है ताकि 'isDetailActive' और 'currentView' एरर न दें
  const [currentView, setCurrentView] = useState('home');
  const [isDetailActive, setIsDetailActive] = useState(false);

  const handleNavigation = (view) => {
    setIsDetailActive(false);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar Component */}
      <Navbar onNavigate={handleNavigation} />

      {/* Main Content Area */}
      <main style={{ padding: '20px', flex: 1 }}>
        <h2>Current View: {currentView}</h2>
        <p>यहाँ आपके पेज का मुख्य कंटेंट दिखेगा।</p>
      </main>
    </div>
  );
}

function App() {
  return (
    <MainLayout />
  );
}

export default App;