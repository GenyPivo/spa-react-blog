import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';
import SinglePost from './SinglePost';
import { List, Button, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.match.params.id);
  }

  render() {
    const posts = this.props.posts;
    const postsCollection = (
      <List>
        {console.log(posts)}
        {posts.map(post => <SinglePost cut={true} post={post} key={post.id}/>)}
      </List>
    );

    const emptyCollectionMessage = (
      <h3 className="no-data">There are no posts yet</h3>
    );

    return (
      <div>
        <h1>Posts</h1>
        <div className="comments-buttons-group">
          <Link to={`/categories/${this.props.match.params.id}/posts/new`}>
            <Button primary>
              Add new post
            </Button>
          </Link>
          <Button onClick={this.props.history.goBack} className="right floated">Go Back</Button>
        </div>
        {posts.length === 0 ? emptyCollectionMessage : postsCollection }
      </div>
    );
  }
}

Posts.propTypes = {
  //posts: PropTypes.array.isRequired,
  //getPosts: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { getPosts })(Posts);
