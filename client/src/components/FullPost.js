import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Button } from 'semantic-ui-react';
import SingleComment from './SingleComment';
import { Link } from 'react-router-dom';

class FullPost extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
    const posts = this.props.posts;
    if (posts.length === 0) {
      fetch(`/api/v1/posts/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({post: data}));
    } else {
      this.setState({post: posts.find(x => x.id.toString() == this.props.match.params.id)});
    }
  }

  render() {
    const post = this.state.post;

    const comments = (
      <div>
        <h3>Comments:</h3>
        <List>
          {(post.hasOwnProperty('comments')) ? post.comments.map(comment => <SingleComment comment={comment} key={comment.id}/>) : ''}
        </List>
      </div>
    );

    return (
      <div>
        <h1>{this.state.post.name}</h1>
        <div className="comments-buttons-group">
          <Link to={`/posts/${this.props.match.params.id}/comments/new`}>
            <Button primary>
              Add new comment
            </Button>
          </Link>
          <Button onClick={this.props.history.goBack} className="right floated">Go Back</Button>
        </div>
        <div className="ui ignored info message">
          {this.state.post.content}
        </div>
        {(post.hasOwnProperty('comments') && this.state.post.comments.length === 0) ? 'Hell' : comments }
      </div>
    );
  }
}

// Categories.propTypes = {
//   categories: PropTypes.object.isRequired,
//   getCategories: PropTypes.func.isRequired
// };

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(FullPost);
