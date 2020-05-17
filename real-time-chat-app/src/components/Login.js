import React, {Component} from 'react';

class Login extends Component {

	render (){
		return(
			<div id = "loginForm">
			    <h1>Real-Time-Chat-App</h1>
			    <h3>Made by: Phillip Pavlich</h3>
			    <h4>A real time chat application using Socket.io to connect to other web users</h4>
                <br />
				<form action="">
				  <input type="text" placeholder="Enter your username" />
                  <input type="submit" value="Login" />
                </form>
			</div>
			);
	}

}

export default Login;