import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Votes from '../Votes/Votes';
import './Post.css';

class Post extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content,
      editing: false
    }
  }

  toggleEdit = () => {
    this.setState({
      editing: ! this.state.editing
    })
  }

  handleSave = () => {
    console.log(this.props)
    this.props.updatePost(this.state.content, this.props.post.id)
    this.toggleEdit()
  }

  handleInput = (val) => {
    this.setState({
      content: val
    })
  }

  render() {
    return (
      <ListGroup.Item>
        {this.state.editing ? (
          <div className='post-box'>
            <input
            type='text'
            value={this.state.content}
            onChange={e => this.handleInput(e.target.value)} />
            <Button onClick={() => this.handleSave()}>
              Save
            </Button>
          </div>)
          : (<div>
            <h4> {this.props.post.content} </h4>
            <Button onClick={this.toggleEdit}>
              Edit
            </Button>
                <Button onClick={() => {this.props.deletePost(this.props.post.id)}}>
                    Delete
                </Button>
                <Votes />
          </div>)
        }
      </ListGroup.Item>
    );
  }
}

export default Post;