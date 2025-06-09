"use client";
import React from "react";
import CountUp from "react-countup";

export default function HeroicStats() {
  return (
    <section className="bg-transparent text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center mb-12">
          <div className="p-6">
            <h2 className="text-3xl font-bold">
              <CountUp end={400} duration={2} />+
            </h2>
            <p className="mt-2 text-sm sm:text-base">Companies Visited</p>
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold">
              <CountUp end={1450} duration={2.5} />+
            </h2>
            <p className="mt-2 text-sm sm:text-base">Offers</p>
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold">
              <CountUp end={6500} duration={3} />+
            </h2>
            <p className="mt-2 text-sm sm:text-base">Brighten Students</p>
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold">
              <CountUp end={19000} duration={3.5} />+
            </h2>
            <p className="mt-2 text-sm sm:text-base">Registered Alumni</p>
          </div>
        </div>

        {/* Lower Section: Logo + Quote */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/20 pt-8">
          {/* Left: Logo */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src="https://www.dituniversity.edu.in/assets/frontend/images/dit-images/naac-white-logo.webp"
              alt="NAAC Logo"
              className="h-24 object-contain"
            />
          </div>

          {/* Right: Quotation */}
          <div className="w-full md:w-1/2 text-center md:text-right text-lg italic ">
            “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”
          </div>
        </div>
      </div>
    </section>
  );
}
