// src/hooks/useBookSearch.js
import { useState } from "react";
import axios from "axios";

const useBookSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async ({ searchTerm }) => {
    setLoading(true);
    setError(null);

    // Construct the API URL based on the search term
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(searchTerm)}`;

    try {
      const response = await axios.get(url);

      // Check if there are any books in the response
      if (response.data.docs && response.data.docs.length > 0) {
        setResults(response.data.docs);
      } else {
        setResults([]);
        setError("No results found.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return {
    results,
    loading,
    error,
    searchBooks,
  };
};

export default useBookSearch;
