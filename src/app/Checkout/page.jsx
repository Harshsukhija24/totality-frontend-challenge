"use client";

import React, { useState } from "react";
import NavBar from "../components/NavBar";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    adharCard: "",
    panCard: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/Checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("You will be contacted via email for payment.");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (error) {
      setError("Failed to submit the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto p-4 sm:p-8 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Checkout Form
          </h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Aadhaar Card
              </label>
              <input
                type="text"
                name="adharCard"
                value={formData.adharCard}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">PAN Card</label>
              <input
                type="text"
                name="panCard"
                value={formData.panCard}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="https://arrivls.com/wp-content/uploads/2023/09/DSC03136.jpg"
            alt="Checkout"
            className="w-full h-64 sm:h-80 md:h-[80vh] rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
