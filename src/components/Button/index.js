import React from 'react';
import './button.css';

const Button = ({ children, className, handleClick }) => (
  <div 
    className={`btn ${className}`}
    onClick={handleClick}
  >
    <span className='btn__text'>
      {children}
    </span>
  </div>
);

export default Button;