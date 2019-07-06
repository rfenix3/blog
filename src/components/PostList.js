import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts(); //calls the fetctPosts action creator.
  }
  render() {
    return (
      <div>
        PostList class
      </div>
    )
  }
};

export default connect (
  null, 
  { fetchPosts }
  )(PostList);
