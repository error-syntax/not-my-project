import React from "react";
import { Tile } from "../../components/Tile";
import "./tiles.css";

export class TilesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 0,
      rows: 0,
      litEhStateArr: [],
      clicks: 0
    };
  }

  buildStateArr = (cols, rows) => {
    let builderStateArr = [];

    for (let i = 0; i < rows; i++) {
      builderStateArr.push([]);
      for (let j = 0; j < cols; j++) {
        builderStateArr[i].push(0);
      }
    }

    this.setState({
      cols: cols,
      rows: rows,
      litEhStateArr: builderStateArr
    });
  };

  toggleLit = tileId => {
    const rowNum = +tileId.split("")[0];
    const colNum = +tileId.split("")[1];
    const { setClicks } = this.props; 

    const newStateOfTiles = this.state.litEhStateArr;
    newStateOfTiles[rowNum][colNum] = !newStateOfTiles[rowNum][colNum];
    newStateOfTiles[rowNum + 1] &&
      (newStateOfTiles[rowNum + 1][colNum] = !newStateOfTiles[rowNum + 1][
        colNum
      ]);
    newStateOfTiles[rowNum - 1] &&
      (newStateOfTiles[rowNum - 1][colNum] = !newStateOfTiles[rowNum - 1][
        colNum
      ]);
    newStateOfTiles[colNum + 1] &&
      (newStateOfTiles[rowNum][colNum + 1] = !newStateOfTiles[rowNum][
        colNum + 1
      ]);
    newStateOfTiles[colNum - 1] &&
      (newStateOfTiles[rowNum][colNum - 1] = !newStateOfTiles[rowNum][
        colNum - 1
      ]);

    this.setState(previousState => {
      setClicks(previousState.clicks + 1);
      return {
      ...this.state,
      litEhStateArr: newStateOfTiles,
      clicks: previousState.clicks + 1
    }
  });
  };

  componentDidMount() {
    const { cols, rows } = this.props;
    this.buildStateArr(cols, rows);
  }

  render() {
    const styles = {
      gridTemplateColumns: `repeat(${this.props.cols}, 3.6rem)`,
      gridTemplateRows: `repeat(${this.props.rows}, 3.6rem)`
    };

    const { litEhStateArr } = this.state;

    return (
      <div className={"grid"} id={"tiles__container"} style={styles}>
        {Array.from(Array(this.props.rows)).map((_tile, rowNum) => {
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
        })}
      </div>
    );
  }
}

/*

LitEhStateArr MATRIX

[  0  1  2  3  4
  [0, 0, 0, 0, 0], //0
  [0, 0, 0, 0, 0], //1
  [0, 0, 1, 0, 0], //2
  [0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0], //4
]


*/
