"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import NavBar from "../components/NavBar";

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              We’d love to hear from you. Here’s how you can reach us.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-12">
            {/* Contact Info */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Our Contact Information
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="text-green-600 text-2xl sm:text-3xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      1001, Business Park, MG Road, Mumbai, Maharashtra, 400001,
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaPhone className="text-green-600 text-2xl sm:text-3xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Phone
                    </h3>
                    <p className="text-gray-600">+91 22 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaEnvelope className="text-green-600 text-2xl sm:text-3xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Email
                    </h3>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 p-4 border-b">
                Find Us on the Map
              </h2>
              <div className="h-64 sm:h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7953081716266!2d72.83242357514458!3d19.106113788075163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c38f8ef0b3%3A0x8b23e7a842fc6d6e!2sBusiness%20Park%2C%20MG%20Road%2C%20Mumbai%2C%20Maharashtra%20400001%2C%20India!5e0!3m2!1sen!2sin!4v1655562213690!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
