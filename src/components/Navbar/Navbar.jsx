import React, { useState } from 'react';
import './Navbar.css';
import NavItems from './NavItems';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <img src="images/240_F_331660570_TLbM5abphy8hvvopZjoIdAIxccMttQEC.jpg" alt="travel" srcset="" className='img' />
        </div>

        {/* Mobile menu button */}
        <button 
          className="navbar-mobile-menu-button" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-icon ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Items */}
        <NavItems isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;