import React, { Component } from 'react';

import UserForm from './components/UserForm'

import './App.css';

class App extends Component {
  state = {
    loggedIn: false,
    online: false,
    notifications: [
      {message: "Your application is offline. You won't be able to share or stream music to other devices."},
       {message: "Listening to music at a high volume could cause long-term hearing loss."},
        {message: "Music quality is degraded. Increase quality if your connection allows it."}
      ]
    

  }


  render() {
   return (
    <div className="App">
      <UserForm/>
      
    </div>
  );
  }
}

export default App;
