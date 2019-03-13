import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render = () => {
    const { user } = this.props;
    if (!user)
      return null;

    return (
      <div>{this.props.user.name}</div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.usersReducer[ownProps.userId] };
};

export default connect(mapStateToProps)(UserHeader);