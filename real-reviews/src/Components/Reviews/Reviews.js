import axios from 'axios';
import React, { Component } from 'react';
import Post from '../Post/Post';
import { connect } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './Reviews.css';

class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postImage: '',
      content: ''
    }
  }

  componentDidMount() {
    this.getUserPost();
  }

  handleInput = (val) => {
    this.setState({ content: val })
  }

  getUserPost = () => {
    axios.get('/api/posts')
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  }

  createPost = (e) => {
    e.preventDefault();
    axios.post('/api/posts', { content: this.state.content })
      .then(() => {
        this.getUserPost();
        this.setState({ ...this.state, content: '' })
      })
      .catch(err => console.log(err));
  }

  deletePost = (id) => {
    console.log(id)
    axios.delete(`/api/posts/${id}`)
      .then(() => {
        this.getUserPost();
      })
      .catch(err => console.log(err));
  }

  updatePost = (content, id) => {
    axios.put(`/api/post/${id}`, { content })
      .then(() => {
        this.getUserPost();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <section className='reviews-box'>
        <ListGroup className='list-container'>
          {this.state.posts.map((post) => {
          return <Post deletePost={this.deletePost} updatePost={this.updatePost} post={post} />
        })}
        </ListGroup>
        <InputGroup className='kicking'>
          <FormControl
            placeholder="Write your very own review here..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={this.state.content} //mental note
            onChange={(e) => this.handleInput(e.target.value)}
            />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.createPost}>Submit</Button>
          </InputGroup.Append>
        </InputGroup>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { id: state.id }
}

export default connect(mapStateToProps)(Reviews);