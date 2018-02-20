import React, { Component } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveCategory } from '../actions/categories';
import { Redirect } from 'react-router-dom';

class AddCategory extends Component {
  state = {
    name: '',
    description: '',
    errors: {},
    server_error: '',
    loading: false,
    completed: false
  };

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];

      this.setState({[e.target.name]: e.target.value, errors: errors});
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (this.state.name === '') errors.name = "Name can't be blank";
    if (this.state.description === '') errors.description = "Description can't be blank";
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      const { name, description } = this.state;
      this.setState({ loading: true });
      this.props.saveCategory({name: name, description: description})
        .then(() => { this.setState( {complete: true} )},
          (err) => err.response.json().then(({error}) => this.setState({ server_error: error, loading: false })));
    }
  };

  render() {
    const form = (
      <Form onSubmit={this.handleSubmit} className={classnames({loading: this.state.loading})}>
        <Header as="h1">Add new category</Header>
        <Form.Field className={classnames({error: !!this.state.errors.name})}>
          <label>Category name</label>
          <input name="name" value={this.state.title} onChange={this.handleChange}/>
          <span>{this.state.errors.name}</span>
        </Form.Field>
        <Form.Field className={classnames({error: !!this.state.errors.description})}>
          <label>Category description</label>
          <input name="description" value={this.state.description} onChange={this.handleChange}/>
          <span>{this.state.errors.description}</span>
        </Form.Field>
        <Button type='submit' primary>Submit</Button>
      </Form>
    );

    return(
      <div>
        {!!this.state.server_error && <div className="ui negative message">{this.state.server_error}</div> }
        { this.state.complete ? <Redirect to="/"/> : form }
      </div>
    )
  };
}

export default connect(null, { saveCategory })(AddCategory);