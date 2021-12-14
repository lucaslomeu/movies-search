import React from 'react';

import './Modal.scss';

const Modal = ({
  id = 'modal',
  onClose = () => {},
  children,
  onClick = () => {},
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal" onClick={onClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
