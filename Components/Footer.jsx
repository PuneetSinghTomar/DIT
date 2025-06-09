"use client";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md text-white text-sm">
      {/* Main Footer Content */}
      <div className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* About the University */}
        <div>
          <h3 className="font-bold text-lg mb-4">About the University</h3>
          <ul className="space-y-1">
            {[
              "The Unison Group",
              "Our Founder",
              "Genesis",
              "CSR",
              "Kulgeet",
              "Rankings and Collaborations",
              "Sustainable Practices",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-gray-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-1">
            {["Annual Report", "Library e- access", "NAD", "NDL"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-gray-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Campus Life */}
        <div>
          <h3 className="font-bold text-lg mb-4">Campus Life</h3>
          <ul className="space-y-1">
            {[
              "Library",
              "Academic Facilities",
              "Campus Facilities",
              "Accommodation",
              "Sports & Health Facilities",
              "Student Festivals",
              "Computing Facilities",
              "Central Workshop",
              "Student Info",
              "National Programme on Technology Enhanced Learning",
              "Other Facilities",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-gray-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs & Others */}
        <div>
          <h3 className="font-bold text-lg mb-4">Programs</h3>
          <ul className="space-y-1 mb-6">
            {["Undergraduate", "Postgraduate", "Ph.D"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-gray-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="font-bold text-lg mb-4">Others</h3>
          <ul className="space-y-1">
            {[
              "Blog",
              "Contact Us",
              "Careers",
              "Mandatory Disclosure RTI",
              "360 Virtual Tour",
              "Library Portal",
              "SII Registration",
              "Academia ERP",
              "iNxt ERP",
              "DMS Portal",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-gray-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup + Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Newsletter Signup</h3>
          <p className="mb-4">
            By subscribing to our mailing list you will always be updated with
            the latest news from us.
          </p>
          <div className="flex items-center border border-white/50 rounded overflow-hidden mb-6">
            <input
              type="text"
              placeholder="Subscribe to Newsletter"
              className="bg-transparent px-4 py-2 w-full outline-none text-white placeholder:text-white/80"
            />
            <button className="bg-white text-black px-4 py-2 font-bold">
              &rarr;
            </button>
          </div>

          <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
          <address className="not-italic leading-relaxed mb-4">
            Mussoorie-Diversion Road, Village Makkawala,
            <br />
            Dehradun, Uttarakhand, India, 248009
          </address>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-400" /> 1800 1210 41000
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-400" /> +91 135 7144000 / 4001
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-400" /> admissions@dituniversity.edu.in
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <Link href="#">Open in Google Maps</Link>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex gap-4">
            <FaFacebookF className="w-6 h-6 bg-zinc-800 rounded-full p-1 cursor-pointer hover:bg-white hover:text-black" />
            <FaXTwitter className="w-6 h-6 bg-zinc-800 rounded-full p-1 cursor-pointer hover:bg-white hover:text-black" />
            <FaYoutube className="w-6 h-6 bg-zinc-800 rounded-full p-1 cursor-pointer hover:bg-white hover:text-black" />
            <FaLinkedinIn className="w-6 h-6 bg-zinc-800 rounded-full p-1 cursor-pointer hover:bg-white hover:text-black" />
            <FaInstagram className="w-6 h-6 bg-zinc-800 rounded-full p-1 cursor-pointer hover:bg-white hover:text-black" />
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-white/20 text-center py-4 text-xs text-white/70">
        © {new Date().getFullYear()} DIT University. All rights reserved.
      </div>
    </footer>
  );
}
