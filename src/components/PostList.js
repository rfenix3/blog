import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostList extends Component {
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
  { fetchPost }
  )(PostList);
