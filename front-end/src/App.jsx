import { Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import Home from "./routes/home/home.components";
import Auth from "./routes/auth/auth.components";
import Navigation from "./routes/navigation/navigation.components";

import "./App.scss";
import React from "react";
import Navigation from "./components/navigation/navigation.components";
class App extends React {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a 
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
