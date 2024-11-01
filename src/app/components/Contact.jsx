"use client";
import React, { useState ,useRef} from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import emailjs from "emailjs-com"
const Contact = () => {
  const form = useRef();
  const user_name = useRef();
  const user_email = useRef();
  const message = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1wwm4ve', 'template_ovfplhi', form.current, 'iXXV44MtI9rFA-j2j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   
    formData.name = "";
    formData.email = "";
    formData.message = "";
    toast.success("Sent");
  };


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
    <div id="Contacts" className="mt-16 flex flex-col md:flex-row bg-[#F5F5F5] min-h-screen">
      
      {/* Left Side: Contact Information */}
      <div className="md:w-1/2 bg[#164574] bg-[#121212] text-white p-10 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8 text-center">
          We’d love to hear from you! Reach out to us for any queries or just to say hello.
        </p>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl" />
            <span>devserve.co@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-xl" />
            <span>+91 8668903099</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-xl" />
            <span>Baner, Pune</span>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 p-10 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-6 text[#164574] text-[#121212]">Contact Us</h2>
        <form
        ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-lg rounded-lg p-8 space-y-6 w-full max-w-lg"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
            ref={user_name}
              type="text"
              id="name"
              name="user_name"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#164574] focus:ring-[#164574] transition"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
            ref={user_email}
              type="email"
              id="email"
              name="user_email"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#164574] focus:ring-[#164574] transition"
            />
          </div>

          
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
            ref={message}
              id="message"
              name="message"
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full p-3 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#164574] focus:ring-[#164574] transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg[#164574] bg-[#121212]  font-semibold rounded-md hover:bg-[#123c59] transition duration-200 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
