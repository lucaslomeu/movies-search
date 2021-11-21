import React from 'react';

import { HiOutlineSearchCircle } from 'react-icons/hi';

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

  function handleClick() {
    let inputValue = document.querySelector('input.search-input').value;
    onChange(inputValue);
  }

  return (
    <>
      <input
        className="search-input"
        type="search"
        onKeyPress={change}
        placeholder="Search for a movie"
      />

      <button type="submit" className="search-btn" onClick={handleClick}>
        {<HiOutlineSearchCircle />}
      </button>
    </>
  );
};

export default SearchInput;
