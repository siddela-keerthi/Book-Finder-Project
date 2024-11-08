import React, { useState } from "react";

const SearchBar = ({ fetchBooks }) => {
  const [title, setTitle] = useState("");

  const handleSearch = () => {
    if (title) {
      fetchBooks(title);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
