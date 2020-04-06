import React, { Component } from "react";
import Board from "../components/Board";
import "../styles/App.css";

/** Simple app that just shows the LightsOut game. */

export default function App () {
    return (
      <div className='App'>
        <Board />
      </div>
    );
}
