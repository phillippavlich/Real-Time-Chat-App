import React, {Component} from 'react';

class SendMessage extends Component {

	render (){
		return(
			<div id = "sendMessageForm">
				<form action="">
                  <input type="text" id="msgBox" name="msgBox" placeholder="Enter a message ..."/>
                  <br/><br/>
                  <input type="submit" value="Send" />
                </form>
			</div>
			);
	}

}

export default SendMessage;