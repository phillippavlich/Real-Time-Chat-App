import React, {Component} from 'react';

class SendMessage extends Component {

	render (){
		return(
			<div id = "sendMessageForm">
				<form action="">
                  <textarea type="text" id="msgBox" className = "no-border" name="msgBox" placeholder="Enter a message ..."></textarea>
                  <div id="submitBox">
                    <input type="submit" value="Send" />
                  </div>
                </form>
			</div>
			);
	}

}

export default SendMessage;