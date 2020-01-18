import React from 'react';
import './modal.css';

const Modal = ({ children }) => (
  <div className='modal__container'>
    {children}
  </div>
);

export default Modal;