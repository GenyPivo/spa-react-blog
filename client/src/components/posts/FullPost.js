import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Button, Image } from 'semantic-ui-react';
import SingleComment from '../comments/SingleComment';
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
      this.setState({post: posts.find(x => x.id.toString() === this.props.match.params.id)});
    }
  }

  render() {
    const comments = (
      <div>
        <h3>Comments:</h3>
        <List>
          {this.props.comments.map(comment => <SingleComment
            comment={comment} key={comment.id}/>)}
        </List>
      </div>
    );

    const emptyCollectionMessage = (
      <h3 className="no-data">There are no comments yet</h3>
    );

    const postImage = (
      <Image src={this.state.post.attachment_url} fluid/>
    );

    const attachUrl = this.state.post.attachment_url;
    const contentType = this.state.post.content_type;

    const postAttachment = (
      <a href={`http://localhost:3001${attachUrl}`}>
        <Button color='red'>
          Attachment: {attachUrl && attachUrl.replace(/^.*[\\\/]/, '').split('?')[0]}
        </Button>
      </a>
    );

    const attachment = () => {
      if (contentType) {
        return contentType.includes('image') ? postImage : postAttachment
      }
    };

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
        {attachment()}
        {this.props.comments.length === 0 ? emptyCollectionMessage  : comments }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps, null)(FullPost);
