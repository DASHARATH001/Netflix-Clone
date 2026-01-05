import React, { useState } from "react";
import SearchBar from "../components/SerarchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black text-white fixed w-full z-30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://wallpapers.com/images/featured/netflix-logo-png-fqwt81hprrz7xsfg.jpg"
            alt="logo"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Right section */}
        <div className="flex items-center gap-4">

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-4 text-sm">
            <Link to="/" className="px-3 hover:underline">
              Home
            </Link>
            <Link to="/tv" className="px-3 hover:underline">
              TV Shows
            </Link>
            <Link to="/movie" className="px-3 hover:underline">
              Movies
            </Link>
          </nav>

          {/* Search */}
          <SearchBar />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <nav className="flex flex-col text-sm">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              to="/tv"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-gray-800"
            >
              TV Shows
            </Link>
            <Link
              to="/movie"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-gray-800"
            >
              Movies
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;



