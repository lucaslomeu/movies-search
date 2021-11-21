import React from 'react';

import './Button.scss';

const Button = ({ text, type, className, onClick = {} }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
