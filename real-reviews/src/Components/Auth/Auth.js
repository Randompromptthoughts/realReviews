import React, { Component } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './Auth.css'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
     email: '',
      password: ''
   }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = (e) => {

  }

  register = (e) => {
    e.preventDefault();
    axios.post('/api/register', {email: this.state.email, password: this.state.password})
    .then(res => {
      
    })
  }

  render() {
    return (
      <section>
        <h1 className='auth-text'>Real Reviews. Real People. Real Gamers.</h1>
        <h4 className='started-text'> Create an Account to get Started</h4>
        <Form>
          <InputGroup name='email' className="email-input">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <Form.Group controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control className='username-input' type='username' placeholder='Enter Username' />
          </Form.Group>

          <Form.Group name='password' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className='password-input' type="password" placeholder="Password" />
          </Form.Group>
          <Button className='login-button' variant="primary" type="login">
            Login
  </Button>
          <Button className='register-button' variant='primary' type='register'>
            Register
      </Button>
        </Form>
      </section>
    );
  }
}

export default Auth;