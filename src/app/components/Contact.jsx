"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#F5F5F5] min-h-screen">
      {/* Left Side: Contact Information */}
      <div className="md:w-1/2 bg[#164574] bg-[#121212] text-white p-10 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8 text-center">
          We’d love to hear from you! Reach out to us for any queries or just to say hello.
        </p>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl" />
            <span>contact@devserve.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-xl" />
            <span>+1 (234) 567-890</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-xl" />
            <span>1234 DevServe St, Software City, CA</span>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 p-10 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-6 text[#164574] text-[#121212]">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 space-y-6 w-full max-w-lg"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#164574] focus:ring-[#164574] transition"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#164574] focus:ring-[#164574] transition"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#164574] focus:ring-[#164574] transition"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#164574] focus:ring-[#164574] transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg[#164574] bg-[#121212] text-white font-semibold rounded-md hover:bg-[#123c59] transition duration-200 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
