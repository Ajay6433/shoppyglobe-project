// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-3705031-3119148.png"
        alt="404 Not Found"
        className="w-80 h-auto mb-6"
      />
      <h2 className="text-3xl font-bold text-gray-800">Page Not Found</h2>
      <p className="text-gray-600 mt-2">We couldn't find the page you're looking for.</p>
      <Link to="/" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
