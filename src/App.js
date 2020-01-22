import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./App.css";

// Views
import { Home } from './views/Homepage';
import { SignIn } from './views/SignIn';
import { Game } from './views/Game';
import { Nav } from "./components/Nav";


function App() {
  const [rows, setRows] = useState(5);
  const [user, setUser] = useState({});
  const [cols, setCols] = useState(5);

  const changeGrid = () => {
    const newGridSize = +document.querySelector("#gridSize__input").value;

    setRows(newGridSize);
    setCols(newGridSize);
    document.querySelector("#game-modal__container").classList.remove("show");
  };

  return (
    <div className={"App"}>
      <Router>
        <Nav user={user}/>
        <Switch>
          <Route exact path="/">
            <Home user={user} changeGrid={changeGrid} />
          </Route>
          <Route path="/signup">
            { user.id ? <Redirect to="/" /> : <SignIn setUser={setUser} /> }
          </Route>
          <Route path="/game">
            <Game rows={rows} cols={cols}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
