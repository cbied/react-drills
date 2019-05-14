import React, { Component } from 'react'

export default class NewTask extends Component {
constructor() {
    super() 

    this.state = {
        userInput: ''
    }

    this.addTask = this.addTask.bind(this);
}

handleInputChange(val) {
    this.setState({ userInput: val })
}

addTask() {
     this.props.add(this.state.userInput)

    this.setState({userInput: ""})
}


  render() {
    return (
      <div>
        <input type="text"
        value={this.state.userInput}
        placeholder="Enter task"
        onChange={e => this.handleInputChange(e.target.value)}
        />
        <button
        onClick={this.addTask}>Add task</button>
      </div>
    )
  }
}
