import React from 'react';
import './modal.css';

const Modal = ({ children, className, id }) => (
  <div id={id} className={className}>
    {children}
  </div>
);

export default Modal;