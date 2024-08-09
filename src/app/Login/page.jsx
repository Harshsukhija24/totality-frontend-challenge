// File: pages/Login.js

"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import NavBar from "../components/NavBar";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
      userType: "buyer", // Fixed to always handle buyer
    });

    if (result.error) {
      setErrorMessage(result.error);
    } else {
      // Redirect on successful login
      window.location.href = "/"; // Adjust as necessary
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
        <div className="bg-white bg-opacity-75 p-8 w-full max-w-md rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Hey, welcome!</h1>
          <form onSubmit={handleSubmit}>
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {errorMessage && (
              <div className="mb-4 text-red-500 text-center">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Log in
            </button>
          </form>
          <span className="block text-center mt-4">
            Don't have an account?{" "}
            <Link href="/Register" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
