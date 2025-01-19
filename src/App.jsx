import React, { useState, useEffect } from "react";

// Layout Components
import Navigation from "./components/Navigation";
import Hero from "./components/hero";

// Section Components
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

// Forms
import AppointmentForm from "./components/AppointmentForm";

// Data
import { services } from "./components/services";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsSection";

const App = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookingClick = () => {
    setShowBookingForm(true);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "about", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100; // Add offset for header

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (scrollPosition >= element.offsetTop && scrollPosition < (element.offsetTop + element.offsetHeight)) {
            setActiveTab(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation 
        activeTab={activeTab} 
        onTabClick={scrollToSection}
      />
      <Hero />

      <div className="relative">
        <section id="services" className="pt-20">
          <ServicesSection 
            services={services} 
            onBooking={handleBookingClick} 
          />
        </section>

        <section id="about" className="pt-20">
          <AboutSection />
        </section>

        <section id="testimonials" className="pt-20">
          <TestimonialsSection />
        </section>

        <section id="contact" className="pt-20">
          <ContactSection />
        </section>
      </div>

      {showBookingForm && (
        <AppointmentForm
          services={services}
          onClose={() => setShowBookingForm(false)}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default App;