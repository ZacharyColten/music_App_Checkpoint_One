import React, { Component } from 'react'
import { Switch, Slider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';





export class Dashboard extends Component {

  render() {
    var style = {
      "display": "flex", "flex-direction": "row", "position": "absolute",
      "left": "50%", top: "50%", "transform": "translate(-50%, -50%)"
    };

    return (

      <div style={style}>


        <Card style={{ "margin": "0" }}>
          <CardContent style={{
            "display": "flex",
            "align-items": "center",
            "justify-content": "center", "flex-direction": "column"
          }}>
            <Typography>
              Toggle Online Status
              <br></br><br></br>
            </Typography>
            <Switch
              checked={this.props.checked}
              onChange={this.props.toggleOnline}
              value="online"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </CardContent>
        </Card>



        <Card style={{ "margin": "0" }}>
          <CardContent>
            <Typography style={{
              "display": "flex",
              "align-items": "center",
              "justify-content": "center"
            }} id="discrete-slider-always" gutterBottom>
              Volume
            </Typography>
            <Slider
              defaultValue={this.props.volume}
              step={10}
              min={0}
              max={100}
              onChange={this.props.changeVolume}
            />
            <div>{this.props.volume}</div>
          </CardContent>
        </Card>



        <Card style={{ "margin": "0" }}>
          <CardContent>
            <Typography style={{
              "display": "flex",
              "align-items": "center",
              "justify-content": "center"
            }}>
              Quality
            </Typography>
            <FormControl >
              <Select
                defaultValue={this.props.quality}
                onChange={this.props.changeQuality}
              >
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Normal</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </div>





    )

  }
}
export default Dashboard
