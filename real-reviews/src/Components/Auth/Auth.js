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

  login = (e) => {
    e.preventDefault();

    let newUser = {
      username: this.state.username,
      email: this.state.email
    }
    this.props.getUser(newUser);
    this.props.history.push('/reviews')
  }

  register = (e) => {
    e.preventDefault();
    axios.post('/api/register', { email: this.state.email, password: this.state.password })
      .then(res => {

      })
  }

  render() {
    const { username, email } = this.state;
    // console.log(this.props);

    return (
      <section className='auth-body'>
        <h1 className='auth-text'>Real Reviews. Real People. Real Gamers.</h1>
        <h4 className='started-text'> Create an Account to get Started</h4>
        <Form>
          <InputGroup value={email} name='email' className="email-input" onChange={(e) => this.handleInput(e)}>
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
            <Form.Control value={username} className='username-input' type='username' placeholder='Enter Username' onChange={(e) => this.handleInput(e)} />
          </Form.Group>

          <Form.Group name='password' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className='password-input' type="password" placeholder="Password" onChange={(e) => this.handleInput(e)} />
          </Form.Group>
          <Button className='login-button' variant="primary" type="login" onClick={this.login}>
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

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, { getUser })(Auth);