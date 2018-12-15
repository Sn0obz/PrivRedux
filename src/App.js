import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./styling/Sidebar";
import { User } from "./class/index";

class App extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="container-fluid">
        <Sidebar />
      </div>
    );
  }
}

export default App;
