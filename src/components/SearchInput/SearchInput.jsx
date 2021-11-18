import React from 'react';

import './SearchInput.scss';

const SearchInput = ({ value, onChange }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <input
      className="search-input"
      type="search"
      value={value}
      onChange={handleChange}
      placeholder="Search for movies"
    />
  );
};

export default SearchInput;
