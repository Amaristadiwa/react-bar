import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="travel-footer">
      <div className="footer-map">
        <h3>My Travel Map</h3>
        <div className="map-container">
          {/* Replace with your actual map embed or image */}
          <img 
            src="https://maps.googleapis.com/maps/api/staticmap?center=World&zoom=2&size=600x300&style=feature:all|element:labels|visibility:off&key=YOUR_API_KEY" 
            alt="Travel map" 
            className="map-image"
          />
          <div className="map-overlay">
            <FaMapMarkerAlt className="map-icon" />
            <span>Places I've Visited</span>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="social-links">
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://pinterest.com" aria-label="Pinterest">
            <FaPinterest />
          </a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} My Travel Journal | Created by Tadiwa Mangate
        </div>
      </div>
    </footer>
  );
};

export default Footer;