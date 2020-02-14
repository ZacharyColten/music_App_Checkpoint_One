import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';


export default class Login extends Component {
  render = () => {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <TextField id="username" label="Username" />
          <TextField id="password" label="Password" type="password" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}
