import React, { useState } from "react";
import Timer from "react-compound-timer";
import { TilesContainer } from "../../containers/Tiles";
import "./game.css";

export const Game = ({ rows, cols }) => {
  const [clicks, setClicks] = useState(0);
  return (
    <div className={"game-container"}>
      <TilesContainer
        cols={cols}
        rows={rows}
        clicks={clicks}
        setClicks={setClicks}
      />
      <span className={"clicks"}>Clicks: {clicks} </span>
      <span className={"timer"}> 
        Time: 
        <Timer initialTime={0} direction="forward">
          {() => (
            <React.Fragment>
              <Timer.Seconds /> seconds
            </React.Fragment>
          )}
        </Timer>
      </span>
    </div>
  );
};
