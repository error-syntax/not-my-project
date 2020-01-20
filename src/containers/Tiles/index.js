import React from 'react';
import Tile from '../../components/Tile';
import './tiles.css'

class TilesContainer extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      cols: 0,
      litEhStateArr: [],
      rows: 0,
    }
  }

  buildStateArr = (cols, rows) => {
    let builderStateArr = []

    for (let i = 0; i < rows; i++) {
      builderStateArr.push([]);
      for (let j = 0; j < cols; j++) {
        builderStateArr[i].push(0)
      }
    }

    this.setState({
      cols: cols,
      rows: rows,
      litEhStateArr: builderStateArr
    })
  }
 
  toggleLit = (tileId) => {
    const rowNum = tileId.split("")[0]
    const colNum = tileId.split("")[1]

    const newStateOfTile = this.state.litEhStateArr
    newStateOfTile[rowNum][colNum] = !newStateOfTile[rowNum][colNum]

    this.setState({
      ...this.state,
      litEhStateArr: newStateOfTile
    })
  }

  componentDidMount() {
    const {cols, rows} = this.props
    this.buildStateArr(cols, rows);
  }

  render() {
    const styles = {
      gridTemplateColumns: `repeat(${this.props.cols}, 3.6rem)`,
      gridTemplateRows: `repeat(${this.props.rows}, 3.6rem)`
    };    

    const {
      litEhStateArr
    } = this.state

    return (
      <div
        className={'grid'}
        id={'tiles__container'}
        style={styles}
      >
        {
          Array.from(Array(this.props.rows)).map((_tile, rowNum) => {
            return Array.from(Array(this.props.cols)).map((_tile, colNum) => {
              return (
                <Tile
                  key={`${rowNum}${colNum}`}
                  id={`${rowNum}${colNum}`}
                  litEh={litEhStateArr[rowNum] && litEhStateArr[rowNum][colNum]}
                  toggleLit={this.toggleLit}
                />
              );
            });
          })
        }
      </div>
    )
  }
};

export default TilesContainer;



/*

LitEh MATRIX

[  0  1  2  3  4
  [0, 0, 0, 0, 0], //0
  [0, 0, 0, 0, 0], //1
  [0, 0, 0, 0, 0], //2
  [0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0], //4
]


*/