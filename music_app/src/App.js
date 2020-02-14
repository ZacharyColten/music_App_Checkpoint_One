import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Snackbar } from '@material-ui/core';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


class App extends Component {
  state = {
    loggedIn: false,
    online: true,
    notification: '',
    volume: 0,
    quality: 3
  }

  login = (e) => {
    e.preventDefault()
    this.setState({ loggedIn: true })
  }

  toggleOnline = (e) => {
    let online = !this.state.online;
    this.setState({
      online,
      notification: online ? '' : 'Your application is offline. You wont be able to share or stream music to other devices.'
    })
  }

  changeVolume = (e, volume) => {
    this.setState({
      volume: volume,
      notification: volume < 80 ? '' : 'Listening to music at a high volume could cause long-term hearing loss.'
    })
  }

  handleClose = () => {
    this.setState({notification: '' })
  }

  changeQuality = (quality) => { 
    this.setState({
      quality: quality,
      notification: quality > 1 ? '' : 'Music quality is degraded. Increase quality if your connection allows it.'
    })
  }

  render = () => {

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Music App
            </Typography>
          </Toolbar>
        </AppBar>
        {this.state.loggedIn ?
          <Dashboard
            checked={this.state.online}
            toggleOnline={this.toggleOnline}
            volume={this.state.volume}
            changeVolume={this.changeVolume}
            changeQuality={this.changeQuality}
            quality={this.state.quality}
          /> : <Login onSubmit={this.login} />}
        <Snackbar open={!!this.state.notification} onClose={this.handleClose} message={this.state.notification} />
      </div>
    );
  }

}

export default App;
