import React, { Component } from 'react';
import classnames from "classnames";
import { savePost } from "../actions/posts";
import { connect } from "react-redux";
import { Button, Form, Header, TextArea } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import PostForm from './PostForm';

class AddPost extends PostForm {
  state = {
    name: '',
    content: '',
    errors: {},
    server_error: '',
    loading: false,
    completed: false
  };

  sendRequestFunction() {
    return this.props.savePost;
  }

  resourceId() {
    return this.props.match.params.id;
  }
}

export default connect(null, { savePost })(AddPost);

