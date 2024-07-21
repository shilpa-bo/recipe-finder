// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState('');

  const handleSearch = () => {
    console.log("Searching for:", ingredient); // Log the search input
    onSearch(ingredient);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter ingredient"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
