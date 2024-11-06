import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to apply active styling
  const getLinkClasses = (path) =>
    location.pathname === path
      ? "text-purple-700 font-semibold" // Active link style
      : "text-gray-600 hover:text-gray-900"; // Default style

  return (
    <> 
      <nav className="fixed z-50 w-[100%] bg-white py-4">
        <div className="flex justify-between w-[86%] mx-auto">
          <Link to="/" className="text-xl font-bold text-project1 underline-offset-4">
            <img src="src/assets/time-logo.png" alt="logo" className="h-9 w-24" />
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
          <div className="hidden md:flex space-x-14 pt-2">
            <Link to="/" className={getLinkClasses("/")}>Home</Link>
            <Link to="/about" className={getLinkClasses("/about")}>About Us</Link>
            <Link to="/service" className={getLinkClasses("/service")}>Services</Link>
            <Link to="/projects" className={getLinkClasses("/projects")}>Projects</Link>
            <Link to="/contact" className={getLinkClasses("/contact")}>Contact Us</Link>
          </div>

          {/* Language option */}
          <div className="text-gray-600 hidden md:block pt-2">EN</div>
        </div>

        {/* Dropdown menu for smaller screens */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start pl-12  space-y-4 mt-8">
            <Link to="/" onClick={() => setIsOpen(false)} className={getLinkClasses("/")}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={getLinkClasses("/about")}>
              About Us
            </Link>
            <Link to="/service" onClick={() => setIsOpen(false)} className={getLinkClasses("/service")}>
              Services
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className={getLinkClasses("/projects")}>
              Projects
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={getLinkClasses("/contact")}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
