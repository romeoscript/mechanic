import React from 'react';
import { Wrench, Clock, Car } from 'lucide-react';

const AboutSection = () => (
  <div className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        With over 15 years of experience, we provide top-quality auto repair services
        with certified mechanics and state-of-the-art equipment. Our commitment to
        excellence and customer satisfaction sets us apart.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Wrench, title: 'Expert Technicians', desc: 'Certified professionals with years of experience' },
          { icon: Clock, title: 'Quick Service', desc: 'Efficient repairs with minimal wait times' },
          { icon: Car, title: 'All Makes & Models', desc: 'Comprehensive service for any vehicle' }
        ].map((feature, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
            <feature.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutSection;