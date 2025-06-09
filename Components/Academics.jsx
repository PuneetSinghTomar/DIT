"use client";
import React, { useState } from "react";

export default function AcademicSection() {
  const [activeTab, setActiveTab] = useState("graduation");
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = [
    { key: "graduation", label: "Graduation" },
    { key: "postgraduation", label: "Post Graduation" },
    { key: "phd", label: "Ph.D" },
  ];

  const graduationDegrees = [
    "B.Tech in Civil Engineering",
    "B.Tech in Electronics & Communication Engineering",
    "B.Tech in Computer Science & Engineering",
    "B. Tech in Robotics and Artificial Intelligence",
    "Bachelor of Computer Applications",
    "B.Sc. in Computer Sciences with specialization in",
    "B.Sc. (Mathematics)",
    "B.Sc. in Physics (Hons.)",
    "B.Sc. in Statistics (Hons.)",
    "B.Sc. (Hons.) in Computer Science with specialization in Data Science",
    "B.Sc. (Hons. with Research) in Computer Science with specialization in Data Science",
    "Bachelor of Architecture",
    "Bachelor of Design - Interior Design",
    "Bachelor of Design - UX",
    "Bachelor of Design - Visual Graphics and Animation",
    "B.A. (Hons.) Economics",
    "B.A. (Hons.) Psychology",
    "B.A. (Hons.) English",
    "B.A. in English",
    "B.Sc. in Physics (Hons. with Research)",
    "B.Sc. (Hons.) Mathematics with Research",
    "B.Sc. (Hons.) Statistics with Research",
    "B.Sc. in Chemistry (Hons. with Research)",
    "B.Sc. in Chemistry",
    "B.Sc. in Physics",
    "B.Sc. (Statistics)",
    "Bachelor of Pharmacy",
    "B. Pharm - Lateral Entry",
    "Bachelor of Science in Nursing",
    "B.Sc. in Medical Laboratory Technology (B.MLT)",
  ];

  const postGraduationDegrees = [
    "M.Tech in Civil Engineering",
    "M.Tech in Computer Science & Engineering",
    "M.Sc. in Computer Science",
    "M.Sc. in Physics",
    "M.Sc. in Mathematics",
    "M.Sc. in Chemistry",
    "Master of Computer Applications (MCA)",
    "Master of Pharmacy (M.Pharm)",
    "Master of Architecture (M.Arch)",
    "M.A. in English",
    "M.A. in Psychology",
    "M.A. in Economics",
    "Master of Design (M.Des)",
    "MBA - Master of Business Administration",
    "Post Graduate Diploma in Data Science",
  ];

  const phdDegrees = [
    "Ph.D in Computer Science",
    "Ph.D in Civil Engineering",
    "Ph.D in Physics",
    "Ph.D in Mathematics",
    "Ph.D in Chemistry",
    "Ph.D in English",
    "Ph.D in Psychology",
    "Ph.D in Economics",
    "Ph.D in Architecture",
    "Ph.D in Pharmacy",
  ];

  const getDegrees = () => {
    switch (activeTab) {
      case "graduation":
        return graduationDegrees;
      case "postgraduation":
        return postGraduationDegrees;
      case "phd":
        return phdDegrees;
      default:
        return [];
    }
  };

  const filteredDegrees = getDegrees().filter((degree) =>
    degree.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="academic" className="mx-4 sm:mx-6 md:mx-10 my-6 p-6 border border-white rounded-2xl backdrop-blur-md bg-white/10 text-white">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-10">
        Academics
      </h2>

      <div className="w-full">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-gray-400 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setSearchTerm(""); // reset search when switching tab
              }}
              className={`px-4 py-2 transition duration-300 ${
                activeTab === tab.key
                  ? "border-b-2 border-white text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-4 sm:mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search degrees..."
            className="w-full sm:w-2/3 lg:w-1/2 px-4 py-2 rounded-lg border border-white/40 bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Degree List */}
        <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent pr-2">
          {filteredDegrees.length === 0 ? (
            <p className="text-gray-300">No results found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white">
              {filteredDegrees.map((degree, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <span className="text-blue-400">›</span>
                  <span>{degree}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
