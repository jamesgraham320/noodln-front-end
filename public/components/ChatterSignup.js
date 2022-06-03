import { Component } from 'react'

export default class ChatterSignup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      interests: '',
    }
  }
  

  handleChange = (e) => {
    console.log(e)
  }


  render() {
    return <form>
      <label>Email
      <input type="text" name="email" />
    </label>
      <label>First Name
      <input type="text" name="firstName" />
    </label>
      <label>Last Name
      <input type="text" name="lastName" />
    </label>
      <label>Interests
      <textarea type="text" name="interests" />
    </label>
    </form>
  }
}
