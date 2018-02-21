import React, { Component } from 'react';
import classnames from "classnames";
import { savePost } from "../actions/posts";
import { connect } from "react-redux";
import { Button, Form, Header, TextArea } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';


export default class PostForm extends Component {
  state = {
    name: '',
    content: '',
    errors: {},
    server_error: '',
    loading: false,
    completed: false
  };

  handleChange = (e) => {
    console.log(124);
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];

      this.setState({[e.target.name]: e.target.value, errors: errors});
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  };

  sendRequestFunction() {

  }

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (this.state.name === '') errors.name = "Name can't be blank";
    if (this.state.content === '') errors.content = "Content can't be blank";
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      this.setState({ loading: true });
      const { name, content } = this.state;
      const resourceId = this.props.match.params.id;

      this.sendRequestFunction()({ name: name, content: content }, resourceId)
        .then(() => { this.setState( {complete: true} )},
          (err) => err.response.json().then(({error}) => this.setState({ server_error: error, loading: false })));
    }
  };

  render() {
    const form = (
      <Form onSubmit={this.handleSubmit} className={classnames({loading: this.state.loading})}>
        <Header as="h1">Add new post</Header>
        <Form.Field className={classnames({error: !!this.state.errors.name})}>
          <label>Post title</label>
          <input name="name" value={this.state.name} onChange={this.handleChange}/>
          <span>{this.state.errors.name}</span>
        </Form.Field>
        <Form.Field className={classnames({error: !!this.state.errors.content})}>
          <label>Content</label>
          <TextArea placeholder='Write something interesting'
                    name="content"
                    value={this.state.content}
                    onChange={this.handleChange} />
          <span>{this.state.errors.content}</span>
        </Form.Field>
        <Button type='submit' primary>Submit</Button>
        <Button onClick={this.props.history.goBack}>Go Back</Button>
      </Form>
    );

    return(
      <div>
        {!!this.state.server_error && <div className="ui negative message">{this.state.server_error}</div> }
        { this.state.complete ? <Redirect to={`/categories/${this.resourceId()}/posts`}/> : form }
      </div>
    )
  }
}



