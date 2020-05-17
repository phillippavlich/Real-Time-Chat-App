import React from 'react';
import './App.css';

import Nav from './components/Nav.js'
import Users from './components/Users.js'
import MessageLog from './components/MessageLog.js'
import SendMessage from './components/SendMessage.js'

function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return (
    <div className="App">
      <Nav />
      <Users user={urlParams.get('user')}/>
      <div id="message-content">
          <MessageLog />
          <SendMessage user={urlParams.get('user')}/>
      </div>

    </div>
  );
}

export default App;
