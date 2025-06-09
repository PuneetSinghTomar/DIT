"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const events = [
  {
    image: "https://www.dituniversity.edu.in/uploads/events/banner_images/68072d83384401745300867.webp",
    name: "Design Degree Show",
    date: "April 25th, 2025",
  },
  {
    image: "https://www.dituniversity.edu.in/uploads/events/banner_images/6800c5ecaa4b51744881132.webp",
    name: "Workshop on Publishing in Design Journals",
    date: "17-04-2025",
  },
  {
    image: "https://www.dituniversity.edu.in/uploads/events/banner_images/6800c51520f351744880917.webp",
    name: "Workshop on Human-Computer Interaction",
    date: "15-04-2025",
  },
  {
    image: "https://www.dituniversity.edu.in/uploads/events/banner_images/67fcebf89e4731744628728.webp",
    name: "Expert Session On AI Automation for UX design",
    date: "14th April 25",
  },
  {
    image: "https://www.dituniversity.edu.in/uploads/events/67f7aea76d4401744285351.webp",
    name: "Guest Lecture on Hyphenated Techniques: Separation and Identification",
    date: "Apr, 2025",
  },
  {
    image: "https://www.dituniversity.edu.in/uploads/events/banner_images/6800c4b421b0f1744880820.webp",
    name: "Workshop on Human-Computer Interaction",
    date: "Apr, 2025",
  },
  {
    image: "https://www.dituniversity.edu.in/uploads/events/67f3c347043031744028487.webp",
    name: "Two-Day Workshop on Drug Abuse Awareness",
    date: "Department of MLT 9th-10th April 2025",
  },
  {
    image: "https://www.dituniversity.edu.in/uploads/events/banner_images/6800c43dac2811744880701.webp",
    name: "Workshop on Research Paper Writing",
    date: "Apr, 2025",
  },
];

const CampusEventsPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const popupTimer = setTimeout(() => setShowPopup(true), 10000); // Show after 10 seconds
    return () => clearTimeout(popupTimer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  if (!showPopup) return null;

  const event = events[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg relative text-center max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-700 hover:text-red-500"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-green-700 mb-4 flex items-center justify-center gap-2">
          📣 What's happening, Campus?
        </h2>

        {/* Banner Image & Info */}
        <div className="relative">
          <div className="w-full h-[250px] md:h-[300px] relative">
            <Image
              src={event.image}
              alt={event.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <p className="mt-3 font-semibold text-lg text-gray-800">{event.name}</p>
          <p className="text-sm text-gray-600">{event.date}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            ⬅ Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            Next ➡
          </button>
        </div>

        {/* Visit Page Button */}
        <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition">
          Visit Page
        </button>
      </div>
    </div>
  );
};

export default CampusEventsPopup;
