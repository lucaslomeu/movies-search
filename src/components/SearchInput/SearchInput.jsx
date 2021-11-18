import React from 'react';

const SearchInput = ({ value, onChange }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <input
      type="search"
      value={value}
      onChange={handleChange}
      placeholder="Search for movies"
    />
  );
};

export default SearchInput;
