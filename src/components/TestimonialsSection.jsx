import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Oluwaseun Adebayo',
    role: 'Business Owner',
    image: '/api/placeholder/150/150',
    rating: 5,
    comment: 'The best auto service I\'ve experienced in Lagos. Their attention to detail and professional service is outstanding. My car runs like new after every service.',
  },
  {
    id: 2,
    name: 'Chidinma Okonkwo',
    role: 'Bank Executive',
    image: '/api/placeholder/150/150',
    rating: 5,
    comment: 'I\'ve been bringing my car here for 2 years now. The team is always professional, transparent about costs, and delivers quality service every time.',
  },
  {
    id: 3,
    name: 'Ahmed Ibrahim',
    role: 'Fleet Manager',
    image: '/api/placeholder/150/150',
    rating: 5,
    comment: 'Managing a fleet of vehicles is challenging, but AutoCare makes it easy. Their service is reliable, efficient, and always on schedule.',
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    {/* Header with Image and Info */}
    <div className="flex items-center mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
      />
      <div className="ml-4">
        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
        <p className="text-gray-600 text-sm">{testimonial.role}</p>
      </div>
    </div>

    {/* Rating */}
    <div className="flex mb-4">
      {[...Array(testimonial.rating)].map((_, index) => (
        <Star
          key={index}
          className="w-5 h-5 fill-current text-yellow-400"
        />
      ))}
    </div>

    {/* Quote Icon */}
    <Quote className="w-10 h-10 text-blue-500/20 mb-2" />

    {/* Comment */}
    <p className="text-gray-600 italic">
      "{testimonial.comment}"
    </p>
  </div>
);

const TestimonialsSection = () => (
  <div className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers have to say about our services.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="transform hover:-translate-y-2 transition-transform duration-300"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">Join our satisfied customers today!</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Book Your Service
        </button>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;