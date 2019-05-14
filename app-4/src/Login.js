import React, { Component } from 'react'

class Login extends Component {
constructor() {
    super()

    this.state = {
        userName: '',
        password: ''
    }

}

    handleUserNameChange(val) {
        this.setState({ userName: val })
    }

    handlePasswordChange(val) {
        this.setState({ password: val })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Username"
                onChange={e => this.handleUserNameChange(e.target.value)}/>
                <input type="text" placeholder="Password"
                onChange={e => this.handlePasswordChange(e.target.value)}/>
                <button
                onClick={() => alert(`Username: ${this.state.userName} Password: ${this.state.password}`)}>Alert</button>
            </div>
        )
    }
}


export default Login