import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Search } from 'lucide-react';
import banner1 from '../assets/banner1.jpg';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [detailedLocation, setDetailedLocation] = useState('');



  const handleGetLocation = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }
  
    setIsSearching(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          console.log(latitude, longitude, 'fries');
  
          // Fetch detailed address using Google Maps API
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBQcXOQ98ZheEx_5BJ5R2_n_JhBtN-ScW8`
          );
          const data = await response.json();
  
          if (data.status === 'OK' && data.results.length > 0) {
            const detailedAddress = data.results[0].formatted_address;
            setLocation(detailedAddress);
            setDetailedLocation(detailedAddress);
          } else {
            alert('Unable to fetch the address. Try again later.');
          }
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setIsSearching(false);
        }
      },
      (error) => {
        console.error('Location error:', error);
        setIsSearching(false);
        alert('Unable to retrieve your location');
      }
    );
  };
  

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={banner1}
          alt="Modern Auto Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center py-4 px-6">
        <div className="text-white text-xl font-semibold">AutoCare Workshop</div>
        <div className="flex gap-8">
          <a href="#services" className="text-white hover:text-blue-400">Services</a>
          <a href="#about" className="text-white hover:text-blue-400">About</a>
          <a href="#testimonials" className="text-white hover:text-blue-400">Testimonials</a>
          <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Content */}
      <div className="relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            FIND AUTO SERVICES<br />NEAR YOU
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Discover trusted mechanics and auto repair services in your area.
            <br />
            Quick service starting from ₦15,000.
          </p>

          {/* Location Search */}
          <div className="max-w-lg space-y-3">
            <label className="block text-white text-lg">
              Service Location
            </label>
            <div className="flex gap-2">
              <button
                onClick={handleGetLocation}
                className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded 
                         hover:bg-white/20 transition-colors border border-white/20
                         flex items-center gap-2 whitespace-nowrap"
              >
                <MapPin className="w-5 h-5" />
                Get Location
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="5th Avenue, Festac Town, Lagos"
                  className="w-full px-4 py-3 pr-10 bg-white/10 backdrop-blur-sm text-white 
                           border border-white/20 rounded placeholder-white/60
                           focus:outline-none focus:border-white"
                />
                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
              </div>
            </div>
            <button
              className="w-full bg-white text-black py-3 rounded font-semibold
                       hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              SEARCH MECHANICS
            </button>
          </div>

          {/* Services Tags */}
          <div>
            <p className="text-white/80 mb-2">Available services include:</p>
            <div className="flex flex-wrap gap-2">
              {['Oil Change', 'Brake Service', 'Engine Diagnostics', 'Tire Service', 'General Repairs'].map((service) => (
                <span 
                  key={service} 
                  className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-20 left-0 right-0 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            PROFESSIONAL AUTO CARE AT YOUR DOORSTEP
          </h2>
          <div className="flex justify-center mt-6">
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;