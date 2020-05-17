import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
    constructor(props){
          super(props);
        }

    componentWillMount() {
        this.setUser(this.props.user);
    }

    state={
        currentUser: ''
    }

    setUser=(user)=>{
            if(user !== "" && user != null){
                this.setState({
                    currentUser: user
                });
            }
        }

	render (){
		return(
			<div id = "sendMessageForm">
				<form action="">
                  <textarea type="text" id="msgBox" className = "no-border" name="msgBox" placeholder="Enter a message ...">{this.state.currentUser}</textarea>
                  <div id="submitBox">
                    <input type="file"
                       id="addFile" name="addFile"
                       accept="image/*, video/*, .pdf, .doc, .docx, .txt" />
                    <input type="submit" value="Send" />
                  </div>
                </form>
			</div>
			);
	}

}

SendMessage.propTypes={
	user: PropTypes.string.isRequired
}

export default SendMessage;