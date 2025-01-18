import React from 'react';

const ContactForm = () => (
  <form className="space-y-6">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 border rounded-md"
    />
    <input
      type="email"
      placeholder="Email Address"
      className="w-full p-3 border rounded-md"
    />
    <textarea
      placeholder="Your Message"
      rows="4"
      className="w-full p-3 border rounded-md"
    ></textarea>
    <button
      type="submit"
      className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
    >
      Send Message
    </button>
  </form>
);

export default ContactForm;