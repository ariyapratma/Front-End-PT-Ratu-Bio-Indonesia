import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white text-gray-800"
          : "bg-custom-yellow text-base-content"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-2 md:p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-16 md:w-20" src="/public/Icon.png" alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 text-sm md:text-base">
          <Link
            className="hover:text-gray-800 font-bold font-lexend transition-colors"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-800 font-regular font-lexend transition-colors"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="hover:text-gray-800 font-regular font-lexend transition-colors"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="hover:text-gray-800 font-regular font-lexend transition-colors"
            to="/product"
          >
            Product
          </Link>
          <Link
            className="hover:text-gray-800 font-regular font-lexend transition-colors"
            to="/order"
          >
            Order
          </Link>
          <Link
            className="hover:text-gray-800 font-regular font-lexend transition-colors"
            to="/maklon"
          >
            Maklon
          </Link>
          <Link
            className="hover:text-gray-800 font-regular font-lexend transition-colors"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="hover:text-gray-800 font-regular font-lexend transition-colors"
            to="/register"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white text-gray-800 rounded-md shadow-lg mt-2 p-4 absolute top-14 left-0 right-0 z-50">
          <li>
            <Link
              className="block px-4 py-2 font-bold font-lexend hover:bg-gray-100"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 font-regular font-lexend hover:bg-gray-100"
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 font-regular font-lexend hover:bg-gray-100"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 font-regular font-lexend hover:bg-gray-100"
              to="/product"
              onClick={() => setMenuOpen(false)}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 font-regular font-lexend hover:bg-gray-100"
              to="/order"
              onClick={() => setMenuOpen(false)}
            >
              Order
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 font-regular font-lexend hover:bg-gray-100"
              to="/maklon"
              onClick={() => setMenuOpen(false)}
            >
              Maklon
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 font-regular font-lexend hover:bg-gray-100"
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 font-regular font-lexend hover:bg-gray-100"
              to="/register"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
