// src/components/Results.jsx
import React from "react";
import "./Results.css";

const Results = ({ results, loading, error }) => {
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (results.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <div className="results-container">
      {results.map((book, index) => (
        <div key={index} className="result-card">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">
            Author: {book.author_name ? book.author_name[0] : "N/A"}
          </p>
          <p className="book-year">
            Year: {book.first_publish_year || "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Results;
