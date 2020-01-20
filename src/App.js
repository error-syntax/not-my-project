import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Modal from './containers/Modal';
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
      />
    </div>
  )
}

export default App;
