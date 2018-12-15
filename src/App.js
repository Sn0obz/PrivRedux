import React, { Component } from "react";
import "./App.css";
import { Sidebar } from "./styling/Sidebar";

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
