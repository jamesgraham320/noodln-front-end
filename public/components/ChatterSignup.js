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
    e.preventDefault();
    console.log('in submit', this.state)
    createChatter(this.state).then(res => {
      let date = new Date();
      date.setTime(date.getTime()+(120*60*60*1000));
      document.cookie = "account_made" + " = " + "true" + "; expires = " + date.toGMTString();
      return;
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
