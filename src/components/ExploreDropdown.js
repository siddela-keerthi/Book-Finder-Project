// ExploreDropdown.js
import React, { useState } from 'react';
import './ExploreDropdown.css';

function ExploreDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
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
  );
}

export default ExploreDropdown;
