import React from 'react';
import { Clock } from 'lucide-react';

const ServiceCard = ({ service, onBooking }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
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
      onClick={onBooking}
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
    >
      Book Service
    </button>
  </div>
);

const ServicesSection = ({ services, onBooking }) => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            onBooking={onBooking}
          />
        ))}
      </div>
    </div>
  </div>
);

export default ServicesSection;