import React from 'react';

import './Button.scss';

const Button = ({ text, type, className, onClick }) => {
  function handleChange(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <button type={type} className={className} onClick={handleChange}>
      {text}
    </button>
  );
};

export default Button;
