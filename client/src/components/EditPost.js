import PostForm from './PostForm';
import React from 'react';
import { editPost } from "../actions/posts";
import { connect } from 'react-redux';

class EditPost extends PostForm {
  categoryId = 0;

  componentDidMount() {
    const posts = this.props.posts;
    console.log(posts);
    const postId = this.props.match.params.id;
    const post = posts.find(x => x.id.toString() === postId);
    if (post) {
      this.categoryId = post.category_id;
      this.setState({name: post.name, content: post.content})
    }
  }

  resourceId() {
    return this.categoryId;
  }

  sendRequestFunction() {
    return this.props.editPost;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { editPost })(EditPost);