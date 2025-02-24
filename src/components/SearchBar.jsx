import React, { useState } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = debounce((value) => {
    onSearch(value);
  }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handleChange}
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '20px',
      }}
    />
  );
};

export default SearchBar;