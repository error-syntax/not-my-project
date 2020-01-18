import React from 'react';
import './tiles.css'

const TilesContainer = ({ children }) => (
  <div id={'tiles__container'} className={'grid'}>
    {children}
  </div>
);

export default TilesContainer;