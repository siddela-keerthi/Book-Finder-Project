// /BookModal.js
import React from 'react';
import './BookModal.css';

const BookModal = ({ book, closeModal }) => {
  if (!book) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <p>Published: {book.publishYear}</p>
        {book.coverId ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`}
            alt={book.title}
            className="book-cover"
          />
        ) : (
          <p>No cover image available</p>
        )}
        <button onClick={closeModal} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default BookModal;
