import React, { useState } from 'react';
import { CalendarDays, Clock, Wrench, User, Car, Phone, Mail, ChevronDown } from 'lucide-react';

const MechanicWorkshop = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  const services = [
    { id: 1, name: 'Oil Change', duration: '1 hour', price: '$49.99', description: 'Complete oil change with filter replacement' },
    { id: 2, name: 'Brake Service', duration: '2 hours', price: '$129.99', description: 'Brake pad replacement and rotor inspection' },
    { id: 3, name: 'Tire Rotation', duration: '30 mins', price: '$29.99', description: 'Tire rotation and balance check' },
    { id: 4, name: 'Engine Diagnostic', duration: '1 hour', price: '$89.99', description: 'Complete engine diagnostic scan' }
  ];

  const AppointmentForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Book an Appointment</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Info</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded-md"
              placeholder="Make, Model, Year"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Service</label>
            <select className="w-full p-2 border rounded-md">
              {services.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} - {service.price}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Date</label>
            <input 
              type="date" 
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="flex space-x-2">
            <button 
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Book Now
            </button>
            <button 
              type="button"
              onClick={() => setShowBookingForm(false)}
              className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">AutoCare Workshop</h1>
          <p className="mt-1">Professional Auto Repair Services</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            <button 
              onClick={() => setActiveTab('services')}
              className={`py-4 px-2 border-b-2 ${
                activeTab === 'services' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`py-4 px-2 border-b-2 ${
                activeTab === 'about' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`py-4 px-2 border-b-2 ${
                activeTab === 'contact' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4">
        {activeTab === 'services' && (
          <div className="grid md:grid-cols-2 gap-4">
            {services.map(service => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <span className="text-blue-600 font-bold">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{service.duration}</span>
                </div>
                <button 
                  onClick={() => setShowBookingForm(true)}
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Book Service
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">About AutoCare Workshop</h2>
            <p className="text-gray-600 mb-4">
              With over 15 years of experience, we provide top-quality auto repair services
              with certified mechanics and state-of-the-art equipment. Our commitment to
              excellence and customer satisfaction sets us apart.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <Wrench className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <h3 className="font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Certified professionals with years of experience</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <h3 className="font-semibold mb-2">Quick Service</h3>
                <p className="text-gray-600">Efficient repairs with minimal wait times</p>
              </div>
              <div className="text-center">
                <Car className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <h3 className="font-semibold mb-2">All Makes & Models</h3>
                <p className="text-gray-600">Comprehensive service for any vehicle</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-blue-600" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-600" />
                    <span>contact@autocare.example</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Business Hours:</p>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-2 border rounded-md"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-2 border rounded-md"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows="4"
                    className="w-full p-2 border rounded-md"
                  ></textarea>
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {showBookingForm && <AppointmentForm />}
    </div>
  );
};

export default MechanicWorkshop;