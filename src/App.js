import React, { Component } from "react";
import "./App.css";
import { Sidebar } from "./styling/Sidebar";
import BasicExample from "./styling/Main"

class App extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <BasicExample></BasicExample>
        </div>
      </div>
    );
  }
}

export default App;
