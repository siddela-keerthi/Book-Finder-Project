// BookCard.js [COMPONENT]

import React from "react";

function BookCard({ book }) {
  return (
    <div className="book-card">
      {book.coverId ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
          alt={`${book.title} cover`}
          className="book-cover"
        />
      ) : (
        <div className="no-cover">No Cover</div>
      )}
      <h3>{book.title}</h3>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Published:</strong> {book.publishYear}
      </p>
    </div>
  );
}

export default BookCard;
