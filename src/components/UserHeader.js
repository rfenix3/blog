import React, { Component} from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId); 
    //fetctUser action creator gets one user object based on the userId,
    //then, runs userReducer dispatch to save the object in Redux state.
  }

  render() {
    // Replace...const user = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div className="header">{user.name}</div>
    )
  }
}

// ownProps is a reference to the props that are about to be sent to this component.
const mapStateToProps = (state, ownProps) => {
  // update users props to user (singular) and put the 'find' logic below.
  return { user: state.users.find(user => user.id === ownProps.userId )};
}

export default connect(
  mapStateToProps,
  {fetchUser}
)(UserHeader);