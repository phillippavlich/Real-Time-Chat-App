import React from 'react';
import './App.css';

import Nav from './components/Nav.js'
import Users from './components/Users.js'
import MessageLog from './components/MessageLog.js'
import SendMessage from './components/SendMessage.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Users />
      <MessageLog />
      <SendMessage />
    </div>
  );
}

export default App;
