import React, { useState } from 'react';

// Layout Components
import Navigation from './components/Navigation';
import Hero from './components/hero';

// Section Components
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

// Forms
import AppointmentForm from './components/AppointmentForm';

// Data
import { services } from './components/services';
import Footer from './components/Footer';

const App = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookingClick = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero />
      
      <div id="content" className="pt-16">
        {activeTab === 'services' && (
          <ServicesSection 
            services={services} 
            onBooking={handleBookingClick} 
          />
        )}
        {activeTab === 'about' && <AboutSection />}
        {activeTab === 'contact' && <ContactSection />}
      </div>

      {showBookingForm && (
        <AppointmentForm 
          services={services} 
          onClose={() => setShowBookingForm(false)} 
        />
      )}

      <Footer/>
    </div>
  );
};

export default App;