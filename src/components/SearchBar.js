// SearchBar.js (COMPONENT)

import React from "react";
import './InfoLines.css'; 
import './SearchBar.css';
function SearchBar({ query, setQuery, handleSearch }) {
  return (
   <div>
     
      
     <div  className="search-bar">
     
     <form onSubmit={handleSearch}>
     
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for career..."
    />
    <button type="submit">Search</button>
    <div className="info-lines">
           <div className="info-line">Please search for books by <span>name</span>, with <span>letters</span>, with <span>numbers</span>, or using specific <span id="keywords">keywords</span>.</div>
    
     </div>
  </form>

  </div>
   </div>
    
  );
}

export default SearchBar;
  