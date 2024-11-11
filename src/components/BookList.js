// BookList.js [COMPONENT]

// export default BookList;
import React, { useState } from 'react';
import './BookList.css'; // Import the CSS for book list
import Modal from './Modal'; // Import Modal for book details

const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null); // Track the selected book
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  // Handle book click to show modal with details
  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true); // Open the modal when a book is clicked
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div
          key={index}
          className="book-item"
          onClick={() => handleBookClick(book)} // Open modal with book details
        >
          <img
            src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
            alt={book.title}
            className="book-cover"
          />
          <div className="book-details">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>Published: {book.publishYear}</p>
          </div>
        </div>
      ))}

      {/* Conditionally render the modal with book details */}
      {isModalOpen && <Modal book={selectedBook} closeModal={closeModal} />}
    </div>
  );
};

export default BookList;
