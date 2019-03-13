import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount = () => {
    this.props.fetchPostsAndUsers();
  }

  renderPosts = () =>
    this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });

  render = () => {
    return (
      <div className="ui list">{this.renderPosts()}</div>
    );
  }
}

const mapStateToProps = ({ postsReducer }) => {
  return { posts: postsReducer };
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);