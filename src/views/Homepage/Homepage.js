import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

export const Home = ({ user }) => {
  return (
    <div id={"container"}>
      <div className={'text-center'}>
        <h1>Welcome to Illuminight {user.id && `, ${user.username}`}</h1>
        <h2>How to play</h2>
        <p> Git good</p>
        <Link to='/game'>
          <button>Start Game</button>
        </Link>
      </div>
    </div>
  );
};
