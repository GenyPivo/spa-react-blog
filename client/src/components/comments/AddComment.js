import React, { Component } from 'react';
import classnames from "classnames";
import { saveComment } from "../../actions/comments";
import {connect} from "react-redux";
import { Button, Form, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';


class AddComment extends Component {
  state = {
    author: '',
    content: '',
    errors: {},
    server_error: '',
    loading: false,
    completed: false
  };

  resource() {
    return {
      id: this.props.match.params.id,
      type: this.props.match.path.split('/')[1]
    }
  }

  handleChange = (e) => {
    if (!!this.state.errors[e.target.author]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.author];

      this.setState({[e.target.name]: e.target.value, errors: errors});
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (this.state.author === '') errors.author = "Author can't be blank";
    if (this.state.content === '') errors.content = "Content can't be blank";
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      const { author, content } = this.state;
      this.setState({ loading: true });
      this.props.saveComment({ author: author, content: content}, this.resource().id, this.resource().type)
        .then(() => { this.setState( {complete: true} )},
          (err) => err.response.json().then(({error}) => this.setState({ server_error: error, loading: false })));
    }
  };

  render() {
    const form = (
      <Form onSubmit={this.handleSubmit} className={classnames({loading: this.state.loading})}>
        <Header as="h1">Add new comment</Header>
        <Form.Field className={classnames({error: !!this.state.errors.author})}>
          <label>Your name</label>
          <input name="author" value={this.state.author} onChange={this.handleChange}/>
          <span>{this.state.errors.author}</span>
        </Form.Field>
        <Form.Field className={classnames({error: !!this.state.errors.content})}>
          <label>Your comment</label>
          <input name="content" value={this.state.content} onChange={this.handleChange}/>
          <span>{this.state.errors.content}</span>
        </Form.Field>
        <Button type='submit' primary>Submit</Button>
        <Button onClick={this.props.history.goBack}>Go Back</Button>
      </Form>
    );

    let path = `/${this.resource().type}/${this.resource().id}/`;
    if (this.resource().type === 'categories') {
      path += 'comments';
    }

    return(
      <div>
        {!!this.state.server_error && <div className="ui negative message">{this.state.server_error}</div> }
        { this.state.complete ? <Redirect to={path}/> : form }
      </div>
    )
  }
}

export default connect(null, { saveComment })(AddComment);

