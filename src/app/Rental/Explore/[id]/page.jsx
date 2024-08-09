"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavExplore from "@/app/components/NavExplore";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cartSlice";

const PropertyDetailPage = ({ params: { id } }) => {
  const [property, setProperty] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch property details from API
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/Rental/${id}`); // Update with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, [id]);

  const handleBookNow = () => {
    if (!startDate || !endDate) {
      alert("Both start date and end date are required!");
      return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
      alert("End date must be after the start date.");
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const numberOfNights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (numberOfNights <= 0) {
      alert("End date must be after the start date.");
      return;
    }

    const totalPrice = property.price_per_night * numberOfNights;

    if (property) {
      dispatch(
        addToCart({
          id: property.id,
          name: property.name,
          price: totalPrice, // Total price for the booking period
          startDate,
          endDate,
          quantity: numberOfNights, // Number of nights
        })
      );
      alert("Booking added to cart!");
    }
  };

  if (!property) {
    return <div className="text-center text-red-500">Loading.</div>;
  }

  return (
    <>
      <NavExplore />
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto mt-5 p-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src={property.images[0]} // Displaying the first image
                alt={property.name}
                width={800}
                height={500}
                className="object-cover w-full h-72 sm:h-80 md:h-96 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                {property.name}
              </h1>
              <p className="text-gray-900 font-bold text-lg mb-2">
                {property.currency} {property.price_per_night} per night
              </p>
              <p className="text-gray-600 mb-4">
                Location: {property.location.city}, {property.location.state},{" "}
                {property.location.country}
              </p>
              <p className="text-gray-800 mb-4">{property.description}</p>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">
                Amenities
              </h2>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                {property.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
              <p className="text-gray-600 mb-4">
                Rating: <span className="font-semibold">{property.rating}</span>{" "}
                ({property.number_of_reviews} reviews)
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-2 text-gray-700">
                Book Now
              </h2>
              <form>
                <div className="flex flex-col sm:flex-row mb-4">
                  <div className="flex-1 sm:mr-2 mb-2 sm:mb-0">
                    <label
                      htmlFor="startDate"
                      className="block font-medium text-gray-700 mb-1"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="flex-1 sm:ml-2">
                    <label
                      htmlFor="endDate"
                      className="block font-medium text-gray-700 mb-1"
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded text-sm transition duration-200 ease-in-out"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailPage;
