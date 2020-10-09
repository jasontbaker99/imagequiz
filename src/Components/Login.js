import React from 'react';
import './Login.css';
import { Redirect } from "react-router-dom"

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: "",
            userGood: false
        }
    }

    onSubmit = (event) => {
        if(this.state.user.trim().length > 0){
            this.setState({userGood: true});
        }
        event.preventDefault();
    }

    whenChanged = (event) => {
        const value = event.target.value;
        this.setState({user: value});
    }


    render(){
        let from = {pathname: '/', state: {userN: this.state.user}}

        if (this.state.userGood) {
            return(
                <Redirect to={from} />
            );

        } else {
            return (
                <form className="TopRight" onSubmit={this.onSubmit}>
                    <label>Username:</label>
                    <input value={this.state.user}
                        type="text"
                        name="username"
                        onChange={this.whenChanged}
                    ></input><br></br>
                    <button type="submit">Login</button>
                </form>
            );
        }
    }
}

export default Login