import React from 'react';
import './button.css';

const Button = ({ children, className }) => (
  <div className={`btn ${className}`}>
    <span className='btn__text'>
      {children}
    </span>
  </div>
);

export default Button;