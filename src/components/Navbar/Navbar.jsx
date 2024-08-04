import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-custom-yellow relative top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-2">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <Link to="/" className="flex items-center">
            <img
              className="w-20 lg:w-24" // Adjust logo size as needed
              src="/public/Icon.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="menu menu-horizontal flex space-x-2 lg:space-x-4">
            <li>
              <Link
                className="text-base lg:text-lg font-bold font-lexend"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-base lg:text-lg font-regular font-lexend"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-base lg:text-lg font-regular font-lexend"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="text-base lg:text-lg font-regular font-lexend"
                to="/product"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                className="text-base lg:text-lg font-regular font-lexend"
                to="/order"
              >
                Order
              </Link>
            </li>
            <li>
              <Link
                className="text-base lg:text-lg font-regular font-lexend"
                to="/maklon"
              >
                Maklon
              </Link>
            </li>
            <li>
              <Link
                className="text-base lg:text-lg font-regular font-lexend"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="text-base lg:text-lg font-regular font-lexend"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden dropdown">
          <div
            tabIndex={0}
            className="btn btn-ghost flex items-center space-x-2"
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
            <span className="text-base font-bold">Menu</span>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box mt-2 p-2 shadow w-44"
          >
            <li>
              <Link className="text-base font-bold font-lexend" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-base font-regular font-lexend" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-regular font-lexend"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-regular font-lexend"
                to="/product"
              >
                Product
              </Link>
            </li>
            <li>
              <Link className="text-base font-regular font-lexend" to="/order">
                Order
              </Link>
            </li>
            <li>
              <Link className="text-base font-regular font-lexend" to="/maklon">
                Maklon
              </Link>
            </li>
            <li>
              <Link className="text-base font-regular font-lexend" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-regular font-lexend"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
