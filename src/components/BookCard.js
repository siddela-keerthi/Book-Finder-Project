import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author_name?.[0]}</p>
      <p>First Published: {book.first_publish_year}</p>
      <p>Publisher: {book.publisher?.[0]}</p>
    </div>
  );
};

export default BookCard;
