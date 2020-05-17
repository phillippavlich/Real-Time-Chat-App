import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Users extends Component {
    constructor(props){
          super(props);
          this.addNewUser(this.props.user);
        }

    state={
        users: ["Bob","Phil","Chad", "Marcus", "Fred"]
    }

    addNewUser=(newName)=>{
        if(newName !== "" && newName != null){
            this.setState({
                users: this.state.users.push(newName)
            });
        }
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

Users.propTypes={
	user: PropTypes.string.isRequired
}

export default Users;