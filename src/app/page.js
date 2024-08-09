import Image from "next/image";
import React from "react";
import NavBar from "./components/NavBar";
import {
  FaCheckCircle,
  FaHome,
  FaLeaf,
  FaUserCheck,
  FaHiking,
  FaBed,
  FaUsers,
} from "react-icons/fa"; // Importing additional icons

const Page = () => {
  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="https://arrivls.com/wp-content/uploads/2023/01/donna-dhs-70.jpg"
          alt="hotel"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Enjoy Your Dream Stay
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-center">
            Find the perfect stay for your next getaway.
          </p>
        </div>
      </div>

      {/* Information Section */}
      <div className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/474x/b1/a4/5b/b1a45b1846602d108389c4afff3814b7.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="rounded-lg opacity-30"
          />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://arrivls.com/wp-content/uploads/2023/09/DSC03136.jpg"
              alt="hotel"
              width={700}
              height={700}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <span className="block mb-2 text-lg sm:text-xl font-bold text-black">
              Experience the epitome of refinement and grandeur in every detail
              of beauty.
            </span>
            <span className="block mb-4 text-base sm:text-lg text-black">
              Discover your ideal home with our comprehensive listings and
              expert guidance. From urban condos to countryside retreats, we're
              here to make your journey the best in every way possible.
            </span>
            <ul className="list-none space-y-2">
              <li className="flex items-center text-base sm:text-lg text-black">
                <FaUsers className="text-green-500 mr-2" /> 30k+ <br /> happy
                customers
              </li>
              <li className="flex items-center text-base sm:text-lg text-black">
                <FaHome className="text-green-500 mr-2" /> 5k+ <br /> properties
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src="https://arrivls.com/wp-content/uploads/2023/01/donna-dhs-70.jpg"
            alt="hotel"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <span className="block text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white">
            An Exhibition of Excellence and Artistry
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="border border-gray-300 p-4 rounded-lg flex items-center bg-white">
              <FaHome className="text-green-500 mr-2 text-xl sm:text-2xl" />
              <span className="text-base sm:text-lg">Easy to Rent</span>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg flex items-center bg-white">
              <FaUserCheck className="text-green-500 mr-2 text-xl sm:text-2xl" />
              <span className="text-base sm:text-lg">Carefully Crafted</span>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg flex items-center bg-white">
              <FaBed className="text-green-500 mr-2 text-xl sm:text-2xl" />
              <span className="text-base sm:text-lg">Proper Hygiene</span>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg flex items-center bg-white">
              <FaHiking className="text-green-500 mr-2 text-xl sm:text-2xl" />
              <span className="text-base sm:text-lg">Spacious Outdoor</span>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg flex items-center bg-white">
              <FaLeaf className="text-green-500 mr-2 text-xl sm:text-2xl" />
              <span className="text-base sm:text-lg">Lush Greenery</span>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg flex items-center bg-white">
              <FaCheckCircle className="text-green-500 mr-2 text-xl sm:text-2xl" />
              <span className="text-base sm:text-lg">Authorized Property</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
