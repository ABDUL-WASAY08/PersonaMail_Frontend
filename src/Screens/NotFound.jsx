import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <video
        src="./NotFound.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-[-1] w-full h-full object-cover"
      />
      <div className="text-center bg-black/40 p-8 rounded-lg backdrop-blur-sm">
        <h1 className="text-6xl font-bold text-white mb-4 shadow-lg">404</h1>
        <p className="text-xl text-gray-200 mb-6">Looks like you're lost in space!</p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;