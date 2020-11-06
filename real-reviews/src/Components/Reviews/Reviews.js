import React, { Component } from 'react';
import Post from '../Post/Post';
import './Reviews.css';

class Reviews extends Component {
  render() {
    return (
      <section className='reviews-box'>
        Reviews Component
        <Post />
      </section>
    );
  }
}

export default Reviews;