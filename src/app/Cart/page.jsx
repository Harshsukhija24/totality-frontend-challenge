"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/cartSlice";
import NavBar from "../components/NavBar";
import Link from "next/link";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <NavBar />
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border-b py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-gray-700">Total Price: ${item.price}</p>
                  <p className="text-gray-700">
                    Dates: {item.startDate} to {item.endDate}
                  </p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-2 sm:mt-0 bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4 text-lg sm:text-xl md:text-2xl font-bold">
              Total Cost: ${totalCost}
            </div>
            <div className="mt-6">
              <Link href="/Checkout">
                <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 block text-center sm:inline-block">
                  Proceed to Checkout
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
