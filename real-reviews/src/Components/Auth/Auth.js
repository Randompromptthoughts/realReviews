import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
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
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.history.push('/reviews')
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    const { email, password } = this.state;

    axios.post('/api/login', { email, password })
      .then(res => {

        this.props.history.push('/reviews');
      })
      .catch(err => console.log(err));
  }

  handleRegister = (e) => {
    const { email, username, password } = this.state;

    axios.post('/api/register', { email, username, password })
      .then(res => {

        this.props.history.push('/reviews');
      })
      .catch(err => {
        if (err.statusCode === 409) {
          alert('User already exists');
        } else {
          alert(`Couldn't register, try again later`)
        }
      })
  }

  render() {
    // const { username, email } = this.state;
    // console.log(this.props);
    return (
      <section className='auth-body'>
        <h1 className='auth-text'>Real Reviews. Real People. Real Gamers.</h1>
        <h4 className='started-text'> Create an Account to get Started</h4>
        <Form>
          <InputGroup value={this.state.email} type='text' name='email' className="email-input"
            onChange={(e) => this.handleInput(e)}>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <Form.Group value={this.state.username} controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='username' className='username-input' placeholder='Enter Username' onChange={(e) => this.handleInput(e)} />
          </Form.Group>

          <Form.Group value={this.state.password} name='password' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className='password-input' type="password" placeholder="Password" onChange={(e) => this.handleInput(e)} />
          </Form.Group>
          <Button className='login-button' variant="primary" type="login" onClick={this.handleLogin}>
            Login
            </Button>
          <Button className='register-button' variant='primary' type='register' onClick={this.handleRegister}>
            Register
          </Button>
        </Form>
      </section>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, { getUser })(Auth);