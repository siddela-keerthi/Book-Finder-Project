//APP.JS 

import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the App.css component
import SearchBar from './components/SearchBar'; // Import  SearchBar component
import BookList from './components/BookList'; // Import  BookList component
import Header from './components/Header';  // Import  Header component
import LoadingPopup from './components/LoadingPopup';  // Import the LoadingPopup component
import Footer from './components/Footer'; // Import  Footer component

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResultsMessage, setNoResultsMessage] = useState('');
  const [showPopup, setShowPopup] = useState(true); // State to control the visibility of the popup

  // Fetch books from Open Library API
  const fetchBooks = async () => {
    setLoading(true);
    setNoResultsMessage('');
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const fetchedBooks = response.data.docs.map((book) => ({
        title: book.title,
        author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
        publishYear: book.first_publish_year || 'N/A',
        coverId: book.cover_i,
      }));

      if (fetchedBooks.length === 0) {
        setNoResultsMessage('No books found');
      } else {
        setBooks(fetchedBooks);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      setNoResultsMessage('Error fetching books. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      fetchBooks();
    }
  };

  // Function to close the popup after it appears
  const closePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  return (
    <div className="App">
      {/* Show the LoadingPopup if `showPopup` is true */}
      {showPopup && <LoadingPopup closePopup={closePopup} />}

      {/* Render the Header component */}
      <Header />

      {/* Main SearchBar and BookFinder content */}
      <h1>Book Finder</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />

      {loading ? (
        <div className="loader"></div>
      ) : noResultsMessage ? (
        <div className="no-results-message">{noResultsMessage}</div>
      ) : (
        <BookList books={books} />
      )}
      <Footer />
    </div>
  );
}

export default App;
