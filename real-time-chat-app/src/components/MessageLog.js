import React, {Component} from 'react';

class MessageLog extends Component {

	render (){
		return(
			<div id = "messageLogBox">
			    <div className="comment"><strong>Phil:</strong> testing</div>
				<div className="comment"><strong>Bob:</strong> testing2</div>

			</div>
			);
	}

}

export default MessageLog;