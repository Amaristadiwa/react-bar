import React from 'react';

const NavItems = ({ isMobileMenuOpen }) => {
  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/services', text: 'Services' },
    { path: '/portfolio', text: 'Portfolio' },
    { path: '/contact', text: 'Contact' },
  ];

  return (
    <div className={`nav-items ${isMobileMenuOpen ? 'active' : ''}`}>
      <ul className="nav-list">
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <a href={link.path} className="nav-link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;