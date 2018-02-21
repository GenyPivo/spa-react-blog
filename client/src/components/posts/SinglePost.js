import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {connect} from "react-redux";
import { destroyPost } from "../../actions/posts";

class SinglePost extends Component{

  removePost(_this) {
    return function () {
      confirmAlert({
        title: 'You want to delete post',
        message: 'Are you sure to do this?',
        confirmLabel: 'Confirm',
        cancelLabel: 'Cancel',
        onConfirm: () => {
          _this.props.destroyPost(_this.props.post.id);
        }
      })
    }
  }
  
  render() {
    const postMaxLength = 500;
    let buttonText = 'Show';
    let content = this.props.post.content;

    if (this.props.cut === true && content.length > postMaxLength) {
      buttonText = 'Show more >>';
      content = content.substring(0, postMaxLength) + ' ...';
    }
    
    return (
      <List.Item className="post-item">
        <h2>{this.props.post.name}</h2>
        <h5>Posted on: {this.props.post.created_at}</h5>
        <div className="ui ignored info message">{content}</div>
        <Link to={`/posts/${this.props.post.id}`}>
          <Button color='orange'>
            {buttonText}
          </Button>
        </Link>
        <Link to={`/posts/${this.props.post.id}/edit`}>
          <Button color='grey'>
            Edit
          </Button>
        </Link>
        <Button color='red' onClick={this.removePost(this)}>
          Destroy
        </Button>
      </List.Item>
    );
  }
}

export default connect(null, { destroyPost })(SinglePost);