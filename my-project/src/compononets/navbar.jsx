import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="py-4 w-[90%] mx-auto">
        <div className="flex justify-between items-center w-[80%] mx-auto">
          <Link to="/" className="text-xl font-bold text-purple-700">
            <img src="src/assets/logo.png" alt="logo" />
          </Link>

          {/* Burger icon for smaller screens */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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

          {/* Navigation links - visible only on medium and larger screens */}
          <div className="hidden md:flex md:space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <Link to="/service" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
          </div>

          {/* Language option */}
          <div className="text-gray-600 hidden md:block">EN</div>
        </div>

        {/* Dropdown menu for smaller screens */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link to="/service" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
