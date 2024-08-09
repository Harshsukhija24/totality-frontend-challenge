import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-green-500">Rental</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href="/Rental/Explore"
          className="text-gray-600 hover:text-gray-800"
        >
          Explore
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
