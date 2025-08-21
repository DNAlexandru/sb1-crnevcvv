import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-modern border-b border-gray-100/50' 
          : 'bg-white/80 backdrop-blur-sm'
        }
      `}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('/')}
          className="cursor-pointer group"
        >
          <span className="text-3xl md:text-4xl font-serif font-bold text-navy-950 transition-all duration-300 group-hover:text-blue-700">
            DNego<span className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300">●</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {['home', 'about', 'services', 'blog', 'contact'].map((key) => {
              const path = key === 'home' ? '/' : `/${key}`;
              return (
                <NavLink
                  key={key}
                  to={path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(path);
                  }}
                  className={({ isActive }) =>
                    `cursor-pointer text-base font-semibold transition-all duration-300 relative group ${
                      isActive
                        ? 'text-blue-700'
                        : 'text-navy-700 hover:text-blue-700'
                    }`
                  }
                >
                  {t(`nav.${key}`, key.charAt(0).toUpperCase() + key.slice(1))}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full" />
                </NavLink>
              );
            })}
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-navy-700" />
            ) : (
              <Menu className="h-6 w-6 text-navy-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-modern lg:hidden">
            <div className="container mx-auto py-6 px-4">
              <nav className="flex flex-col space-y-4">
                {['home', 'about', 'services', 'blog', 'contact'].map((key) => {
                  const path = key === 'home' ? '/' : `/${key}`;
                  return (
                    <NavLink
                      key={key}
                      to={path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(path);
                      }}
                      className={({ isActive }) =>
                        `cursor-pointer text-lg font-semibold py-2 px-4 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'text-blue-700 bg-blue-50'
                            : 'text-navy-700 hover:text-blue-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      {t(`nav.${key}`, key.charAt(0).toUpperCase() + key.slice(1))}
                    </NavLink>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;