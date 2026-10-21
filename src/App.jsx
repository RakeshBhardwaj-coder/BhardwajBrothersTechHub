import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar'; // फ़ाइल पाथ अपने अनुसार सेट करें

// 1. Home / Main Page Component
function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <section id="home" style={{ minHeight: '80vh', background: '#f5f5f5', padding: '20px', marginBottom: '20px' }}>
        <h1>Home Section</h1>
      </section>

      <section id="process" style={{ minHeight: '80vh', background: '#e0e0e0', padding: '20px', marginBottom: '20px' }}>
        <h1>Process Section</h1>
      </section>

      <section id="info" style={{ minHeight: '80vh', background: '#f5f5f5', padding: '20px', marginBottom: '20px' }}>
        <h1>Information Section</h1>
      </section>

      <section id="aboutus" style={{ minHeight: '80vh', background: '#e0e0e0', padding: '20px', marginBottom: '20px' }}>
        <h1>About Us Section</h1>
      </section>

      <section id="sadhna" style={{ minHeight: '80vh', background: '#f5f5f5', padding: '20px' }}>
        <h1>Sadhna Section</h1>
      </section>
    </div>
  );
}

// 2. Dummy Login Page
function LoginPage() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Login Page</h1>
    </div>
  );
}

// 3. Main Layout Wrapper
function MainLayout() {
  const handleNavigation = (view) => {
    console.log('Navigated to:', view);
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

// 4. Root App Component (Router यहाँ Wrap किया गया है)
export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}