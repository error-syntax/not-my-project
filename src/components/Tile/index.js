import React, { useState } from 'react';
import './tile.css';

const Tile = ({ id }) => {
  const [litEh, toggleLit] = useState(false);
  return (
    <div
      id={id}
      className={litEh ? 'tile lit' : 'tile'}
      onClick={() => toggleLit(!litEh)}
    >
    </div>
  )
};

export default Tile;