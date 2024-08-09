"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavExplore = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <span className="text-3xl font-bold text-green-600">Rental</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <Link
          href="/Contact"
          className="text-gray-700 hover:text-green-600 transition duration-300"
        >
          Contact Us
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="/Logout"
            className="text-gray-700 hover:text-green-600 transition duration-300"
          >
            User Info
          </Link>
          <Link
            href="/Cart"
            className="relative text-gray-700 hover:text-green-600 transition duration-300"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavExplore;
