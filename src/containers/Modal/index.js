import React from 'react';
import './modal.css';

const Modal = ({ children, id }) => (
  <div id={id} className='modal__container show'>
    {children}
  </div>
);

export default Modal;