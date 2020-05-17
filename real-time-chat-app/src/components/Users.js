import React, {Component} from 'react';

class Users extends Component {
    constructor(){
          super();
          this.users=["Bob","Phil","Chad", "Marcus"];
        }

	render (){
		return(
			<div id = "usersBox">
				<h3> <u>Online Users ({this.users.length}) : </u></h3>
				<ul className="no-dots">
				    {this.users.map((value, index) => {
                        return <li key={index}>{value}</li>
                      })}
				</ul>
			</div>
			);
	}

}

export default Users;