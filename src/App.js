import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Modal from './containers/Modal';
import Tile from './components/Tile';
import TilesContainer from './containers/Tiles';

function App() {
  const [rows, setRows] = useState(5);
  const [cols, setCols] = useState(5);

  const changeGrid = () => {
    const newGridSize = +document.querySelector('#gridSize__input').value;
    
    setRows(newGridSize);
    setCols(newGridSize);
    document.querySelector('#game-modal__container').classList.remove('show');
  };

  return (
    <div className="App">
      <Modal id={'game-modal__container'} className='modal__container'>
        <h2>Enter the number of ROWSxCOLS you'd like your puzzle.</h2>
        <span>
          <input id={'gridSize__input'} type={'text'} placeholder={'Grid Size?'} />
          <Button className='btn--light' handleClick={changeGrid}>
            Submit
          </Button>
        </span>
      </Modal>
      <TilesContainer
        cols={cols}
        rows={rows}
      >
        {
          Array.from(Array(rows)).map((_tile, rowNum) => {
            return Array.from(Array(cols)).map((_tile, colNum) => {
              return <Tile key={`${rowNum}${colNum}`} id={`${rowNum+1}${colNum+1}`} />
            })
          })
        }
      </TilesContainer>
    </div>
  );
}

export default App;

/*
SINGLE_ARRAY


is this an end of row?
  idx%5 === 0
is the beginning of row?
  (idx-1)%5 === 0

cols = 5
rows = 5

is in first row?
  idx <= rows
is in last row?
  idx <= (cols * rows) && idx > ((cols * rows) - rows)

1 2 3 4 5
x x x x x
6 7 8 9 0
x x x x x
1 2 3 4 5
x x x x x
6 7 8 9 0
x x x x x
1 2 3 4 5
x x x x x

*/

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