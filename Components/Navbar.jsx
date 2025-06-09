'use client';

import { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import ChatBot from './ChatBot';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent backdrop-blur-md sticky top-0 z-50 text-white">
      {/* Upper Navbar */}
      <div className="px-4 sm:px-6 py-4 border-b border-white/20">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://www.dituniversity.edu.in/uploads/logo/6350d4ffdd3471666241791.svg"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex flex-wrap gap-4 lg:gap-6">
            <Link href="#academic" scroll={true} className="hover:text-blue-300">Academics</Link>
            <Link href="#research" scroll={true} className="hover:text-blue-300">Research</Link>
            <Link href="#placements" scroll={true} className="hover:text-blue-300">Placements</Link>
            <Link href="/admission" className="hover:text-blue-300">Admissions</Link>
            <Link href="#campuslife" scroll={true} className="hover:text-blue-300">Campus Life</Link>
            <Link href="/magazine" className="hover:text-blue-300">Magazine</Link>
            <Link href="/aboutus" className="hover:text-blue-300">About Us</Link>
            <Link href="/career" className="hover:text-blue-300">Career</Link>
          </div>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/academics" className="block px-4 py-2 hover:text-blue-300">Academics</Link>
            <Link href="/research" className="block px-4 py-2 hover:text-blue-300">Research</Link>
            <Link href="/placements" className="block px-4 py-2 hover:text-blue-300">Placements</Link>
            <Link href="/admission" className="block px-4 py-2 hover:text-blue-300">Admissions</Link>
            <Link href="/campuslife" className="block px-4 py-2 hover:text-blue-300">Campus Life</Link>
            <Link href="/magazine" className="block px-4 py-2 hover:text-blue-300">Magazine</Link>
            <Link href="/aboutus" className="block px-4 py-2 hover:text-blue-300">About Us</Link>
            <Link href="/career" className="block px-4 py-2 hover:text-blue-300">Career</Link>
          </div>
        )}
      </div>

      {/* Lower Navbar */}
      <div className="px-4 sm:px-6 py-3 bg-white/10 border-t border-white/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Chatbot on Left */}
          <div className="w-full sm:min-w-[350px] sm:max-w-[450px]">
            <ChatBot />
          </div>

          {/* Address and Phone on Right */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-white text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>DIT University, Dehradun</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91 12345 67890</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
