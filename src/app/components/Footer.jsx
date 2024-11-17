"use client";
import React from "react";
import { Link } from "react-scroll";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-10 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">DevServe</h2>
          <p className="text-gray-300">
            Your one-stop solution for all software development needs.
            Providing reliable app, web, and desktop solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="Home" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="Services" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                Services
              </Link>
            </li>
            <li>
              <Link to="About" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link to="FAQ" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="Contacts" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 mb-2">Email: devserve.co@gmail.com</p>
          <p className="text-gray-300 mb-4">Phone: +91 7841018646</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/dev.serve/profilecard/?igsh=d3FxdnVyMHd4bjh6" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://x.com/DevServe_2024?t=s-RyFCD-8D2ceFwvcJ_Uug&s=09" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/dev-serve-05a079331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/DevServe-co?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} DevServe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
