import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-lg rounded-b-lg">
        <h1 className="text-3xl font-bold text-blue-600">CashKaro Wallet</h1>
        <div>
          <button
            className="px-4 py-2 mx-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 transition duration-300"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
          <button
            className="px-4 py-2 mx-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to CashKaro Wallet!
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
          Secure, Fast, and Easy Payments at Your Fingertips. Join us today and experience seamless transactions!
        </p>
        <button
          className="mt-6 px-8 py-3 text-lg text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-md py-4 text-center">
        <p className="text-gray-600">© 202 CashKaro Wallet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;