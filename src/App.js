
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
      const fetchedBooks = response.data.docs.map((book) => ({
        title: book.title,
        author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
        publishYear: book.first_publish_year || 'N/A',
        coverId: book.cover_i,
      }));
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      fetchBooks();
    }
  };

  return (
    <div className="App">
      <h1>Book Finder</h1>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a book title..."
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="book-list">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
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
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Published:</strong> {book.publishYear}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
