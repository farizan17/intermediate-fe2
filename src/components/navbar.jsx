import React, { useState, useRef, useEffect } from "react";
import Logo from "./logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tutup dropdown kalau klik di luar area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex flex-row items-center justify-between px-4 md:px-20 py-4 bg-gray-800 gap-4 md:gap-0">
      {/* Logo + Nav */}
      <div className="text-xl md:text-2xl font-bold flex items-center gap-4 md:gap-10">
        <div className="flex items-center text-3xl md:text-4xl">
          <Logo size={40} />
          <span className="hidden md:text-4xl md:inline">CHILL</span>
        </div>
        <nav className="flex gap-6 md:gap-10 text-sm md:text-xl font-thin md:font-bold">
          <a href="#" className="hover:underline">
            Series
          </a>
          <a href="#" className="hover:underline">
            Film
          </a>
          <a href="#" className="hover:underline">
            Daftar Saya
          </a>
        </nav>
      </div>

      {/* Profile dropdown */}
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div
          className="flex items-center gap-2 md:gap-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="https://i.pravatar.cc/30"
            alt="Profile"
            className="rounded-full w-7 h-7 md:w-8 md:h-8"
          />
          <img src="KeyboardArrowDown.svg" alt="▼" className="w-5 h-5" />
        </div>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-blue-600 rounded-md shadow-lg z-50">
            <a
              href="#"
              className="flex items-center px-4 py-3 text-sm text-blue-400 hover:bg-gray-800 border-b border-dotted border-blue-500"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v1a6 6 0 0012 0V8a6 6 0 00-6-6zM4 8a6 6 0 1112 0v1a6 6 0 01-12 0V8z" />
              </svg>
              Profil Saya
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 border-b border-dotted border-blue-500"
            >
              <svg
                className="w-4 h-4 mr-2 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-3.5-3.5L8.5 10 10 11.5 13.5 8 15 9.5 10 15z" />
              </svg>
              Ubah Premium
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800"
            >
              <svg
                className="w-4 h-4 mr-2 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 10a1 1 0 011-1h10l-3.5-3.5L12 4l6 6-6 6-1.5-1.5L14 11H4a1 1 0 01-1-1z" />
              </svg>
              Keluar
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
