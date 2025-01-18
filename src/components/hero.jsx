import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => (
  <div className="relative h-screen">
    <div className="absolute inset-0">
      <img
        src="/api/placeholder/1920/1080"
        alt="Modern Auto Workshop"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
    <div className="relative h-full flex items-center justify-center text-white text-center">
      <div className="max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Next Generation Auto Care</h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience the future of automotive maintenance with cutting-edge technology and expert craftsmanship
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
          Schedule Service
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
    <div className="absolute bottom-8 left-0 right-0 flex justify-center">
      <ChevronDown className="w-8 h-8 text-white animate-bounce" />
    </div>
  </div>
);

export default Hero;