// Modal.js
import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ book, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable body scrolling when modal is open
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Published Year:</strong> {book.publishYear}</p>
        <img 
          src={`https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`} 
          alt={book.title} 
          className="modal-image"
        />
        <p>This is a very nice book, you should definitely read it!</p>
        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
