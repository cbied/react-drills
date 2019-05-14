import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      userInput: '',
      meals: ['swordfish','steak','cod','spaghetti','chicken']
    }
  }

  handleUserInput(val) {
    this.setState({ userInput: val })
  }

 

  render() {
    let displayMeals = this.state.meals
      .filter(meal => meal.includes(this.state.userInput))
      .map((element,index) => <h3 key={index}>{element}</h3>)
  
    return (
      <div className="App">
        <input type="text"
        onChange={e => this.handleUserInput(e.target.value)}
        />

        {displayMeals}
      </div>
    );
  }
}

export default App;
