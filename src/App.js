import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { User } from "./class/index";

class App extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <User />
        </header>
      </div>
    );
  }
}

export default App;
