import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-300 to-indigo-400 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-12 max-w-lg w-full text-gray-800">
        <h1 className="text-4xl font-extrabold text-center text-indigo-900 mb-8 tracking-wide">
          Welcome to <span className="text-purple-700">Algebro</span>
        </h1>
        <p className="text-center text-lg mb-10 font-medium text-gray-600">
          Choose your math subject level to begin
        </p>
        <div className="flex flex-col gap-6">
          <Link
            to="/h1"
            className="block text-center bg-indigo-600 text-white rounded-2xl py-4 font-semibold shadow-md hover:bg-indigo-700 transition duration-300"
          >
            H1
          </Link>
          <Link
            to="/h2"
            className="block text-center bg-purple-600 text-white rounded-2xl py-4 font-semibold shadow-md hover:bg-purple-700 transition duration-300"
          >
            H2
          </Link>
        </div>
      </div>
    </div>
  );
}
