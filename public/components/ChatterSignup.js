import { Component } from 'react'
import { createChatter } from '../adapters/api.js'
import {Input, FormControl, FormLabel, Button, Textarea} from '@chakra-ui/react'

export default class ChatterSignup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      interest: '',
    }
  }
  

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    createChatter(this.state)
  }

  render() {
    return <FormControl onSubmit={this.handleSubmit}>
      <FormLabel>Email
      <Input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
    </FormLabel>
      <FormLabel>First Name
      <Input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
    </FormLabel>
      <FormLabel>Last Name
      <Input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
    </FormLabel>
      <FormLabel>Interests
      <Textarea type="text" name="interest" value={this.state.interest} onChange={this.handleChange}/>
    </FormLabel>
    <Input type="submit" value="Submit" />
    
    </FormControl>
  }
}
