import React from 'react';
import './tiles.css'

const TilesContainer = ({ children, cols, rows }) => { 
  const styles = {
    gridTemplateColumns: `repeat(${cols}, 3.6rem)`,
    gridTemplateRows: `repeat(${rows}, 3.6rem)`
  };

  return (
    <div 
      className={'grid'}
      id={'tiles__container'}
      style={styles}
    >
      {children}
    </div>
  )
};

export default TilesContainer;