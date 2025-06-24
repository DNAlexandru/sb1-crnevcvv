import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
          DNego<span className="text-blue-700">●</span>com
        </span>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Services', 'Blog', 'Contact'].map((name) => {
            const path = name === 'Home' ? '/' : `/${name.toLowerCase()}`;
            return (
              <NavLink
                key={name}
                to={path}
                onClick={(e) => {
                  e.preventDefault(); // evita navigazione doppia
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
                {name}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          {/* ...burger menu... */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
