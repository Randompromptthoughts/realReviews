import React, { Component } from 'react';
import Votes from '../Votes/Votes';

class Post extends Component {
  render() {
    return (
      <section>
        Post Component is a child of 'Reviews'
        <Votes />
      </section>
    );
  }
}

export default Post;