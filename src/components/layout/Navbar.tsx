import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-white/50 backdrop-blur-sm
        transition-shadow duration-300
        ${scrolled ? 'shadow-md' : 'shadow-none'}
      `}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <span
          onClick={() => handleNavClick('/')}
          className="cursor-pointer text-2xl md:text-3xl font-serif font-bold text-navy-950"
        >
          DNego<span className="text-blue-700">●</span>
        </span>

        {/* Right side: links and language */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
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
                    `cursor-pointer text-base md:text-lg font-medium transition-colors ${
                      isActive
                        ? 'text-blue-700'
                        : 'text-navy-950 hover:text-blue-700'
                    }`
                  }
                >
                  {t(`nav.${key}`, key.charAt(0).toUpperCase() + key.slice(1))}
                </NavLink>
              );
            })}
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile: language and menu toggle */}
        <div className="relative flex items-center space-x-4 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            className="p-1"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border rounded shadow-lg py-2">
              {['home', 'about', 'services', 'blog', 'contact'].map((key) => {
                const path = key === 'home' ? '/' : `/${key}`;
                return (
                  <NavLink
                    key={key}
                    to={path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(path);
                      setMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-navy-950 hover:bg-gray-100"
                  >
                    {t(`nav.${key}`, key.charAt(0).toUpperCase() + key.slice(1))}
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
