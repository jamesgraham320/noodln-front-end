import { Component } from 'react'
import { createChatter } from '../adapters/api.js'
import {Input, Button, FormControl, FormLabel, Textarea, Form} from '@chakra-ui/react'

export default class ChatterSignup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      email: '',
      interest: '',
    }
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit = (e) => {
    console.log('in handle submit')
    e.preventDefault();
    createChatter(this.state).then(res => {
      this.setState({
        fullName: '',
        email: '',
        interest: '',
      })
    })
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <FormLabel>Email
      <Input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
    </FormLabel>
      <FormLabel>Full Name
      <Input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange}/>
    </FormLabel>
      <FormLabel>Interests
      <Textarea type="text" name="interest" value={this.state.interest} onChange={this.handleChange}/>
    </FormLabel>
    <Button type='submit' >Submit</Button>
  </form>
  }
}
