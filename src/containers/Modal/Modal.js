import React from 'react';
import './modal.css';

export const Modal = ({ children, className, id }) => (
  <div id={id} className={className}>
    {children}
  </div>
);