import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Book Appointment', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Career', href: '#' }
  ];

  const services = [
    { name: 'Oil Change', href: '#' },
    { name: 'Brake Service', href: '#' },
    { name: 'Engine Diagnostic', href: '#' },
    { name: 'Wheel Alignment', href: '#' },
    { name: 'AC Service', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">AutoCare Workshop</h3>
            <p className="text-gray-400">
              Professional auto repair and maintenance services to keep your vehicle in top condition.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 mt-6">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <span>info@autocare.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 mt-1" />
                <span>123 Workshop Street, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="flex items-center hover:text-blue-500 transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="flex items-center hover:text-blue-500 transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-500" />
                <div>
                  <p className="font-semibold text-white">Monday - Friday</p>
                  <p className="text-gray-400">8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-500" />
                <div>
                  <p className="font-semibold text-white">Saturday</p>
                  <p className="text-gray-400">9:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-500" />
                <div>
                  <p className="font-semibold text-white">Sunday</p>
                  <p className="text-gray-400">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mt-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} AutoCare Workshop. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;