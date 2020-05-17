import React, {Component} from 'react';

class Login extends Component {
    state={
        user: ""
    }

    onChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit=(e)=>{
        //prevent default submission
        if(this.state.user === ""){
            e.preventDefault();
            alert("Sorry, you have not entered a username. Please try again.");
        }
        else{
            alert("Welcome to the app " + this.state.user + "!");
        }
    }

	render (){
		return(
			<div id = "loginForm">
			    <h1>Real Time Chat App</h1>
			    <h3>Made by: Phillip Pavlich</h3>
			    <h4>A real time chat application using Socket.io to connect to other web users</h4>
                <br />
				<form action="/app" onSubmit={this.onSubmit}>
				  <input type="text" name="user" placeholder="Enter your username" onChange={this.onChange} />
                  <input type="submit" value="Login" />
                </form>
			</div>
			);
	}

}

export default Login;