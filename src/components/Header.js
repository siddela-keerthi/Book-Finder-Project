// Header.js
import React, { useState } from 'react';
import './Header.css';
import LibraryLogo from '../Library-logo.png'; 
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      {/* Logo on the left side */}
      <div className="logo">
        <img src={LibraryLogo} alt="BookFinder Logo" className="logo-image" />
      </div>

      {/* Explore dropdown on the right side */}
      <div className="explore-container">
        <button className="explore-btn" onClick={toggleDropdown}>
          Explore
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>New Arrivals</li>
              <li>Trending</li>
              <li>Genres</li>
              <li>Authors</li>
              <li>Top Rated</li>
              <li>Book Clubs</li>
              <li>Events & Workshops</li>
              <li>Reading Lists</li>
              <li>Book Recommendations</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
