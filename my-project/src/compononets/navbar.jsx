import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  const getLinkClasses = (path) =>
    location.pathname === path
      ? "text-purple-700 font-semibold"
      : "text-gray-600 hover:text-gray-900";

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(newLang);
  }

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
            <Link to="/" className={getLinkClasses("/")}>{t('navbar.home')}</Link>
            <Link to="/about" className={getLinkClasses("/about")}>{t('navbar.about_us')}</Link>
            <Link to="/service" className={getLinkClasses("/service")}>{t('navbar.services')}</Link>
            <Link to="/projects" className={getLinkClasses("/projects")}>{t('navbar.projects')}</Link>
            <Link to="/contact" className={getLinkClasses("/contact")}>{t('navbar.contact_us')}</Link>
          </div>

          {/* Language option */}
          <div>
            <button onClick={toggleLanguage} className="text-gray-600 md:block pt-2">
              {i18n.language === 'en' ? 'አማ' : 'Eng'}
            </button>
          </div>
        </div>

        {/* Dropdown menu for smaller screens */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start pl-12 space-y-4 mt-8">
            <Link to="/" onClick={() => setIsOpen(false)} className={getLinkClasses("/")}>
              {t('navbar.home')}
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={getLinkClasses("/about")}>
              {t('navbar.about_us')}
            </Link>
            <Link to="/service" onClick={() => setIsOpen(false)} className={getLinkClasses("/service")}>
              {t('navbar.services')}
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className={getLinkClasses("/projects")}>
              {t('navbar.projects')}
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={getLinkClasses("/contact")}>
              {t('navbar.contact_us')}
            </Link>
            {/* Language toggle for mobile view */}
            <button onClick={() => { toggleLanguage(); setIsOpen(false); }} className="text-gray-600">
              {i18n.language === 'en' ? 'Amharic' : 'English'}
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
