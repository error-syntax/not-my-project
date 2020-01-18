import React, { useState } from 'react';
import './App.css';
import Tile from './components/Tile';
import TilesContainer from './containers/Tiles';

function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  return (
    <div className="App">
      <TilesContainer>
        {
          Array.from(Array(25)).map((tile, idx) => <Tile key={idx} id={`tile-${idx}`} />)
        }
      </TilesContainer>
    </div>
  );
}

export default App;
