import React from 'react';
import './App.css';

import Users from './components/Users.js'
import MessageLog from './components/MessageLog.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Add content here
        </p>

      </header>

      <Users />
      <MessageLog />
    </div>
  );
}

export default App;
