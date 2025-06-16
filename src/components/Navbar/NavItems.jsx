import React from 'react';
import './Navbar.css'; // Make sure this file contains your styles

const NavItems = ({ isMobileMenuOpen }) => {
  const navLinks = [
    { path: '/', text: 'My travel Journal' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-center">
        {navLinks.map((link, index) => (
          <a key={index} href={link.path} className="nav-link">
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavItems;
