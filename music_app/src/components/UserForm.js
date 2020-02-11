import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import DiscreteSlider from './Slider'
import SwitchLabels from './Switch'
import SimpleSelect from './Select'
import Card from '@material-ui/core/Card'

export class UserForm extends Component {
  state = {
    step: 1,
    userName: '',
    password: ''
  }

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step : step + 1
    })
  }

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step : step - 1
    })
  }

  // Handle fields change. 
  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  render() {
    const {step} = this.state;
    const { userName, password} = this.state;
    const values = { userName, password}

    switch(step) {
      case 1:
        return (
          <FormUserDetails
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )
        case 2: 
        return <h1><DiscreteSlider/>
        <SwitchLabels/>
        <SimpleSelect/></h1>
        case 3: 
        return <h1>Confirm</h1>
        case 4:
        return <h1>Success</h1>
    }
  
  }
}

export default UserForm
