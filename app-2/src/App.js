import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      meals: ['swordfish','steak','fish','spaghetti','sushi']
    }
  }


  render() {
    let displayMeals = this.state.meals.map((element,index) => {
      return <h3 key={index}>{element}</h3>
    })
    return (
      <div className="App">
        {displayMeals}
        
      </div>
    );
  }
}

export default App;
