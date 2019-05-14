import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      userInput: ''
    }
  }

  handleInputChange(val) {
    this.setState({ userInput: val })
  }

  render() {
    return (
      <div className="App">
        <input type="text"
        placeholder="change the text"
        onChange={e => this.handleInputChange(e.target.value)}
        />
        
        <h2>{this.state.userInput}</h2>
      </div>
    );
  }
}

export default App;
