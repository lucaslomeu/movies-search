import React from 'react';

import './SearchInput.scss';

const SearchInput = ({ onChange }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  function change(e) {
    if (e.key === 'Enter') {
      handleChange(e);
    }
  }

  return (
    <input
      className="search-input"
      type="search"
      onKeyPress={change}
      placeholder="Search for a movie"
    />
  );
};

export default SearchInput;
