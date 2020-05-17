import React, {Component} from 'react';

class MessageLog extends Component {
    constructor(){
      super();
      this.addNewComment("Marcus", "hi");
    }

    state={
        comments: [{
                 sender: "Phil",
                 msg: "testing messages"
             },
             {
                 sender: "Bob",
                 msg: "i think i got it right this time"
             },
              {
                  sender: "Chad",
                  msg: "this is to test a very long message. I want to make sure that all of it is properly displayed and that the lines are wrapped and correct"
              }]
    }

    addNewComment=(user, comment)=>{
        if(comment !== ""){
            this.setState({
                comments: this.state.comments.push({sender: user, msg: comment})
            });
        }
    }

	render (){
		return(
			<div id = "messageLogBox">
			    {this.state.comments.map((value, index) => {
			        return <div className="comment" key={index}> <strong> {value.sender}: </strong> {value.msg}</div>
                  })}

			</div>
			);
	}

}

export default MessageLog;