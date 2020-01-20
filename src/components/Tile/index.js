import React from 'react';
import './tile.css';

const Tile = ({id, litEh, toggleLit}) => {
    return (
      <div
        id={id}
        className={litEh === 1 ? 'tile lit' : 'tile'}
        onClick={() => {
          toggleLit(id)
        }}
      >
      </div>
    )
};

export default Tile;

/*

MATRIX

[
  [0w, 1w, 2w, 3w, 4w], //0
  [0v, 1v, 2v, 3v, 4v], //1
  [0x, 1x, 2x, 3x, 4x], //2
  [0y, 1y, 2y, 3y, 4y], //3
  [0z, 1z, 2z, 3z, 4z], //4
]


*/