import { Component } from "react";
import { createChatter } from "../adapters/api.js";
import {
  Spinner,
  Input,
  FormErrorMessage,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Form,
} from "@chakra-ui/react";

export default class ChatterSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      interest: "",
      fullNameInvalid: false,
      emailInvalid: false,
      interestInvalid: false,
      socialLink: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let valid = this.validateFields();
    if (!valid) {
      return;
    }

    this.props.setIsLoading(true);
    const newChatter = {
      fullName: this.state.fullName,
      email: this.state.email.toLowerCase(),
      interest: this.state.interest,
      socialLink: this.state.socialLink,
    };
    createChatter(newChatter, this.props.orgId).then((res) => {
      this.props.setIsLoading(false);
      this.props.setAccountCreated(true);
      this.setState({
        fullName: "",
        email: "",
        interest: "",
      });
    });
  };

  validateFields = () => {
    let validForm = true;
    if (!this.state.fullName && this.state.fullName === "") {
      validForm = false;
      this.setState({ fullNameInvalid: true });
    } else {
      this.setState({ fullNameInvalid: false });
    }
    if (!this.state.interest && this.state.interest === "") {
      validForm = false;
      this.setState({ interestInvalid: true });
    } else {
      this.setState({ interestInvalid: false });
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)) {
      validForm = false;
      this.setState({ emailInvalid: true });
    } else {
      this.setState({ emailInvalid: false });
    }
    return validForm;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl isRequired={true} isInvalid={this.state.emailInvalid}>
            <FormLabel>Email</FormLabel>
            <Input
              bg="white"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <FormErrorMessage>
              We need a valid email to get you Noodln!
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired={true} isInvalid={this.state.fullNameInvalid}>
            <FormLabel>Full Name</FormLabel>
            <Input
              bg="white"
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
            <FormErrorMessage>We have to know who you are!</FormErrorMessage>
          </FormControl>
          <FormControl isRequired={true} isInvalid={this.state.interestInvalid}>
            <FormLabel>Bio - About You!</FormLabel>
            <Textarea
              bg="white"
              type="text"
              name="interest"
              value={this.state.interest}
              onChange={this.handleChange}
            />
            <FormErrorMessage>
              So your lunch buddy has an intro!
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Social Link</FormLabel>
            <Input
              bg="white"
              type="text"
              name="socialLink"
              value={this.state.socialLink}
              onChange={this.handleChange}
            />
            <FormErrorMessage>
              So your lunch buddy has an intro!
            </FormErrorMessage>
          </FormControl>
          <Button
            bg="#982022"
            color="#d2caca"
            type="submit"
            onClick={this.handleSubmit}
          >
            Get Noodln!
          </Button>
        </VStack>
      </form>
    );
  }
}
