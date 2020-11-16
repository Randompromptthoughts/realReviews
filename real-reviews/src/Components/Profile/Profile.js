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
    this.state = {
      username: '',
      email: ''
    }
  }
  
  render() {
    return (
      <section>
        <h3>
          {this.state.username}'s Profile Page
        </h3>
        <Figure className='figure-box'>
          <Figure.Image className='profile-pic' />
          <Figure.Caption className='profile-font'>
            This is where the users text will appear blah blah blah.. lorem ipsum sodn seuvn moreds.
          </Figure.Caption>
        </Figure>
        <InputGroup>
    <FormControl
      placeholder="Tell us about yourself..."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
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

// const mapStateToProps = reduxState => reduxState;
// console.log(mapStateToProps);
export default connect(null, {getUser})(Profile);