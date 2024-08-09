"use client";

import NavExplore from "@/app/components/NavExplore";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const Explore = () => {
  const route = useRouter();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/Rental");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProperties(data);
        setFilteredProperties(data);
        console.log("Fetched properties:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter properties based on the search term
    const applyFilters = () => {
      const searchLower = searchTerm.toLowerCase();
      let results = properties.filter((property) => {
        const matchesCity = property.location.city
          .toLowerCase()
          .includes(searchLower);
        const matchesState = property.location.state
          .toLowerCase()
          .includes(searchLower);
        const matchesPrice = property.price_per_night
          .toString()
          .includes(searchLower);
        const matchesBedrooms = property.bedrooms
          .toString()
          .includes(searchLower);
        const matchesAmenities = property.amenities.some((amenity) =>
          amenity.toLowerCase().includes(searchLower)
        );

        return (
          matchesCity ||
          matchesState ||
          matchesPrice ||
          matchesBedrooms ||
          matchesAmenities
        );
      });

      setFilteredProperties(results);
    };

    applyFilters();
  }, [searchTerm, properties]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <NavExplore />
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/22/27/82/22278244b9baa7282018225b515b844e.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Great customer service and a fantastic selection of properties
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-center">
            Discover the best rental options tailored to your needs.
          </p>
          <div className="relative z-20 mb-8 w-full max-w-lg mx-auto">
            <div className="flex items-center border rounded-lg p-2 bg-white shadow-md">
              <FaSearch className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Search by city, price, bedrooms, or amenities..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="p-2 border-none outline-none w-full text-gray-800"
              />
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-white">
            Available Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => route.push(`/Rental/Explore/${property.id}`)}
              >
                <Image
                  src={property.images[0]} // Displaying the first image
                  alt={property.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48 sm:h-56 md:h-64"
                />
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {property.name}
                  </h3>
                  <p className="text-gray-900 font-bold text-sm sm:text-base">
                    {property.currency} {property.price_per_night} per night
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Location: {property.location.city},{" "}
                    {property.location.state}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
