import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch books from the API
  const fetchBooks = async (title) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${title}`
      );
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
//   {loading ? <p>Loading...</p> : <BookList books={books} />}
  return (
    <div className="App">
      <h1>Book Finder</h1>
      <SearchBar fetchBooks={fetchBooks} />
    {/*  */}
      {loading ? (
  <div className="loader"></div>
) : (
  <BookList books={books} />
)}

    </div>
  );
};

export default App;
