import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions/comments';
import SingleComment from './SingleComment';
import { List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Comments extends Component {
  resourceParams() {
    return {
      id: this.props.match.params.id,
      resource: this.props.match.path.split('/')[1]
    }
  }
  componentDidMount() {
    this.props.getComments(this.resourceParams().id, this.resourceParams().resource);
  }

  render() {
    const comments = this.props.comments;

    const commentsCollection = (
      <List>
        {console.log(comments)}
        {comments.map(comment => <SingleComment comment={comment} key={comment.id}/>)}
      </List>
    );

    const emptyCollectionMessage = (
      <p>There are no comments yet</p>
    );

    return (
      <div>
        <h1>Comments</h1>
        <Link to={`/${this.resourceParams().resource}/${this.resourceParams().id}/comments/new`} className="item">
          <Button primary>
            Add new comment
          </Button>
        </Link>
        {comments.length === 0 ? emptyCollectionMessage : commentsCollection }
      </div>
    );
  }
}

Comments.propTypes = {
  //comments: PropTypes.array.isRequired,
  //getComments: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, { getComments })(Comments);
