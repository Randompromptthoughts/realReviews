import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import Figure from 'react-bootstrap/Figure';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      username: '',
      email: '',
      profileText: ''
    }
  }
  
  handleInput = e => {
    this.setState({
      ...this.state.profileText,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <section>
        <h3 className='profile-text'>
          {this.props.user.username}'s Profile Page
        </h3>
        <Figure className='figure-box'>
          <Figure.Image className='profile-pic' />
          <Figure.Caption className='profile-font'>
            The users desired profile info will appear here.. lorem ipsum sodn seuvn moreds.
            {/* {this.state.profileText} */}
          </Figure.Caption>
        </Figure>
        <InputGroup>
    <FormControl
      placeholder="Tell us about yourself..."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      name='user-text'
      className='profile-input'
    />
    <InputGroup.Append>
      <Button className='submit-button' variant="primary">Submit</Button>
      <Button className='edit-button' variant="primary">Edit</Button>
    </InputGroup.Append>
  </InputGroup>
      </section>
    );
  }
}

const mapStateToProps = reduxState => reduxState;
// console.log(mapStateToProps);
export default connect(mapStateToProps)(Profile);