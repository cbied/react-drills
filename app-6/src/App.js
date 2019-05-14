import React, { Component } from "react";
import Todo from './Todo'
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
        list: [],
        userInput: ''
    }

    this.updateList = this.updateList.bind(this)
}

handleUserChange(val) {
    this.setState({ userInput: val })
}

updateList() {
    this.setState({
        list: [...this.state.list, this.state.userInput],
        userInput: ''
    })
}


    render() {
        let list = this.state.list.map((element,index) => {
            return <Todo key={index} task={element} />
        })
        return (
            <div className="App">
                <h3>My To-do List</h3>
                <input type="text" 
                value={this.state.userInput} 
                placeholder="Enter task here"
                onChange={e =>  this.handleUserChange(e.target.value)}
                />
                <button
                onClick={this.updateList}>Add</button>

                {list}
            </div>
        );
    }
}

export default App;
