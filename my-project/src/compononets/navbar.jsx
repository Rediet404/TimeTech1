import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  // Function to apply active styling
  const getLinkClasses = (path) =>
    location.pathname === path
      ? "text-purple-700 font-semibold" // Active link style
      : "text-gray-600 hover:text-gray-900"; // Default style

// Function to switch the language
const toggleLanguage = () => {
  const newLang = i18n.language === 'en' ? 'am' : 'en';
  i18n.changeLanguage(newLang);
}

  // Function to scroll to top on link click
  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      // Scroll to top if already on the current page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <> 
      <nav className="fixed z-50 w-[100%] bg-white py-4">
        <div className="flex justify-between w-[86%] mx-auto">
          <Link to="/" onClick={() => handleLinkClick("/")} className="text-xl font-bold text-project1 underline-offset-4">
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
            <Link to="/" className={getLinkClasses("/")}>{t('navbar.home')}</Link>
            <Link to="/about" className={getLinkClasses("/about")}>{t('navbar.about_us')}</Link>
            <Link to="/service" className={getLinkClasses("/service")}>Services</Link>
            <Link to="/projects" className={getLinkClasses("/projects")}>Projects</Link>
            <Link to="/contact" className={getLinkClasses("/contact")}>Contact Us</Link>
            <Link to="/" onClick={() => handleLinkClick("/")} className={getLinkClasses("/")}>Home</Link>
            <Link to="/about" onClick={() => handleLinkClick("/about")} className={getLinkClasses("/about")}>About Us</Link>
            <Link to="/service" onClick={() => handleLinkClick("/service")} className={getLinkClasses("/service")}>Services</Link>
            <Link to="/projects" onClick={() => handleLinkClick("/projects")} className={getLinkClasses("/projects")}>Projects</Link>
            <Link to="/contact" onClick={() => handleLinkClick("/contact")} className={getLinkClasses("/contact")}>Contact Us</Link>
          </div>

          {/* Language option */}
          <div >
            <button onClick={toggleLanguage} className="text-gray-600 hidden md:block pt-2">
            {i18n.language === 'en' ? 'Amharic' : 'English'}
        </button></div>
        </div>

        {/* Dropdown menu for smaller screens */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start pl-12 space-y-4 mt-8">
            <Link to="/" onClick={() => { handleLinkClick("/"); setIsOpen(false); }} className={getLinkClasses("/")}>
              Home
            </Link>
            <Link to="/about" onClick={() => { handleLinkClick("/about"); setIsOpen(false); }} className={getLinkClasses("/about")}>
              About Us
            </Link>
            <Link to="/service" onClick={() => { handleLinkClick("/service"); setIsOpen(false); }} className={getLinkClasses("/service")}>
              Services
            </Link>
            <Link to="/projects" onClick={() => { handleLinkClick("/projects"); setIsOpen(false); }} className={getLinkClasses("/projects")}>
              Projects
            </Link>
            <Link to="/contact" onClick={() => { handleLinkClick("/contact"); setIsOpen(false); }} className={getLinkClasses("/contact")}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
