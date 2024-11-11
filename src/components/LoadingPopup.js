// LoadingPopup.js
// export default LoadingPopup;
import React from 'react';
import PopupImage from '../book-white.png';
import './LoadingPopup.css'; // Import the CSS for styling

function LoadingPopup({ closePopup }) {
  return (
    <div className="loading-popup">
      <div className="popup-content">
        <img
          src={PopupImage}  // Replace with your actual logo or image URL
          alt="Library Logo"
          className="popup-image"
        />
        <h2>Welcome to the Library!</h2>
        <p>
          Hey Alex! Ready to explore your next great read? Search for any book, author, or genre, and dive into a world of endless possibilities!
        </p>
        {/* OK button to close the popup */}
        <button className="popup-ok-button" onClick={closePopup}>OK</button>
      </div>
    </div>
  );
}

export default LoadingPopup;

