import React from 'react';
import './button.css';

const Button = ({ children }) => (
  <div className='btn'>
    <span className='btn__text'>
      {children}
    </span>
  </div>
);

export default Button;