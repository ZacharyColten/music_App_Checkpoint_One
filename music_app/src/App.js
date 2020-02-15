import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Snackbar } from '@material-ui/core';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    loggedIn: false,
    online: true,
    notification1: '',
    notification2: '',
    notification3: '',
    volume: 50,
    quality: 2,
  }

  login = (e) => {
    e.preventDefault()
    this.setState({ loggedIn: true })
  }

  toggleOnline = (e) => {
    let online = !this.state.online;
    this.setState({
      online,
      notification1: online ? '' : 'Your application is offline. You wont be able to share or stream music to other devices.'
    })
  }

  changeVolume = (e, volume) => {
    this.setState({
      volume: volume,
      notification2: volume < 80 ? '' : 'Listening to music at a high volume could cause long-term hearing loss.'
    })
  }

  changeQuality = (e) => {
    this.setState({
      quality: e.target.value,
      notification3: e.target.value !== 1 ? '' : 'Music quality is degraded. Increase quality if your connection allows it.'
    })
  }

  handleClose1 = () => {
    this.setState({ notification1: '' })
  }
  handleClose2 = () => {
    this.setState({ notification2: '' })
  }
  handleClose3 = () => {
    this.setState({ notification3: '' })
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
        <Snackbar open={!!this.state.notification1} onClose={this.handleClose1} message={this.state.notification1} />
        <Snackbar open={!!this.state.notification2} onClose={this.handleClose2} message={this.state.notification2} />
        <Snackbar open={!!this.state.notification3} onClose={this.handleClose3} message={this.state.notification3} />
      </div>
    );
  }
}
export default App;
