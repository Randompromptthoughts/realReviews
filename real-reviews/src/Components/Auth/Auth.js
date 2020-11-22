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
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleEmail = () => {
    const { email, } = this.state;
    // console.log(this.state)
    
    axios.post('/api/email', { email })
    .then( () => {
      this.props.history.push('/reviews');
    })
    .catch(err => console.log(err))
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    let newUser = {
        username: this.state.username
    };
    this.props.getUser(newUser) // redux function updates initial state value when user clicks login

    axios.post('/api/login', { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push('/reviews');
      })
      .catch(err => console.log(err));
  }

  handleRegister = (e) => {
    e.preventDefault();

    const { email, username, password } = this.state;

    axios.post('/api/register', { email, username, password })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      // console.log('hit token')
      this.handleEmail()
    })
      .catch(err => {
        // console.log(`hit2`)
        if (err.statusCode === 409) {
          alert('User already exists');
        } else {
          alert(`Couldn't register, Are you sure you're not registered already? try again later`);
        }
      });
  }

  render() {
    // const { username, email } = this.state;
    console.log(this.props);
    return (
      <section className='auth-body'>
        <h1 className='auth-text'>Real Reviews. Real People. Real Gamers.</h1>
        <h4 className='started-text'> Create an Account to get Started</h4>
        <Form>
          <InputGroup  type='text' className="email-input">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="email"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => this.handleInput(e)} value={this.state.email}
            />
          </InputGroup>
          <Form.Group value={this.state.username} controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" type='username' className='username-input' placeholder='Enter Username' 
            value={this.state.username} onChange={(e) => this.handleInput(e)} />
          </Form.Group>

          <Form.Group value={this.state.password} name='password' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" className='password-input' type="password" placeholder="Password" 
            value={this.state.password} onChange={(e) => this.handleInput(e)} />
          </Form.Group>
          <Button className='login-button' variant="primary" type="login" onClick={this.handleLogin}>
            Login
            </Button>
          <Button className='register-button' variant='primary' type='register'
          onClick={this.handleRegister}>
            Register
          </Button>
        </Form>
      </section>
    );
  }
}

// const mapStateToProps = reduxState => reduxState; first argument is mapStateToProps or null. Always. Hence null

export default connect(null, { getUser })(Auth);