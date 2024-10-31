"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#164574] text-white py-10 px-4 md:px-8">
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
              <Link href="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link href="/why-choose-us" className="hover:text-gray-300">Why Choose Us</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 mb-2">Email: support@devserve.com</p>
          <p className="text-gray-300 mb-4">Phone: +123 456 7890</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
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
