"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavBar from "../components/NavBar";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/Register/Buyer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message);
        setErrorMessage(""); // Clear previous errors
      } else {
        setErrorMessage(result.message);
        setSuccessMessage(""); // Clear previous success messages
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An unexpected error occurred.");
      setSuccessMessage(""); // Clear previous success messages
    }
  };

  return (
    <>
      <NavBar />
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 md:px-0"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/8d/00/fe/8d00fe388465f658b57bd16026c25e2d.jpg')",
        }}
      >
        <div className="bg-white bg-opacity-75 p-8 w-full max-w-lg rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4 text-center">Hey, welcome!</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex-1 mt-4 md:mt-0">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter your username"
                value={formData.userName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {errorMessage && (
              <div className="mb-4 text-red-500 text-center">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="mb-4 text-green-500 text-center">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <span className="block text-center mt-4">
            Already have an account?{" "}
            <Link href="/Login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
