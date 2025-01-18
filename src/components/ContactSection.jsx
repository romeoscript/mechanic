import React from 'react';
import { Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-4 text-blue-600" />
              <span className="text-lg">(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-4 text-blue-600" />
              <span className="text-lg">contact@autocare.example</span>
            </div>
            <div>
              <p className="font-semibold text-lg mb-3">Business Hours:</p>
              <div className="space-y-2">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </div>
);

export default ContactSection;