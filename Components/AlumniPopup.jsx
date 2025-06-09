"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const AlumniPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000); // 10 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg p-6 max-w-3xl shadow-lg relative text-center">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-700 hover:text-red-500"
        >
          ×
        </button>
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 flex items-center justify-center gap-2">
          🎉 Congratulations to our Alumni!
        </h2>

        {/* Image */}
        <Image
          src="/alumni-banner.png"
          alt="Alumni Banner"
          width={1000}
          height={600}
          className="rounded-lg"
        />

        {/* See More Button */}
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default AlumniPopup;
