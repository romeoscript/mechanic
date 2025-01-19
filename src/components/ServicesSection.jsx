import React from 'react';
import { Clock, Star, Shield, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, onBooking }) => (
  <div className="group">
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />
        <div className="absolute bottom-4 left-6 text-white transform transition-all duration-300 group-hover:translate-y-[-4px]">
          <h3 className="text-xl font-bold mb-1">{service.name}</h3>
          <span className="text-2xl font-bold text-blue-400 inline-block transform group-hover:scale-110 transition-transform duration-300">
            {service.price}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Clock className="w-4 h-4 text-blue-600 group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-gray-600">{service.duration}</span>
          {service.rating && (
            <div className="flex items-center ml-4 transform transition-all duration-300 group-hover:scale-110">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span className="ml-1 text-gray-600">{service.rating}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-6 transform transition-all duration-300 group-hover:translate-x-1">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {service.features?.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-center text-gray-600 transform transition-all duration-300 hover:translate-x-2"
            >
              <Shield className="w-4 h-4 mr-2 text-blue-600" />
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={onBooking}
          className="w-full bg-blue-600 text-white py-3 rounded-lg transform transition-all duration-300 
            hover:bg-blue-700 hover:shadow-lg active:scale-95 flex items-center justify-center group"
        >
          <span>Book Service</span>
          <ArrowRight className="w-4 h-4 ml-2 transform transition-all duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  </div>
);

const ServicesSection = ({ services, onBooking }) => (
  <div className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 transform origin-left animate-[scaleX_1s_ease-out_forwards]" />
        <p className="text-gray-600 max-w-2xl mx-auto transform opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          Experience top-notch automotive care with our comprehensive range of services,
          delivered by certified professionals using state-of-the-art equipment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
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