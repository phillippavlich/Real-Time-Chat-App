import React, {Component} from 'react';

class Users extends Component {
    constructor(){
          super();
          this.addNewUser("Carlos");
        }

    state={
        users: ["Bob","Phil","Chad", "Marcus", "Fred"]
    }

    addNewUser=(newName)=>{
        this.setState({
            users: this.state.users.push(newName)
        });
    }

	render (){
		return(
			<div id = "usersBox">
				<h3> <u>Online Users ({this.state.users.length}) : </u></h3>
				<ul className="no-dots">
				    {this.state.users.map((value, index) => {
                        return <li key={index}>{value}</li>
                      })}
				</ul>
			</div>
			);
	}

}

export default Users;