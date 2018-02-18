import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

export default class Header extends Component {
  render() {
    return(
      <Link to='/categories/add' className="offset-sm-5">
        <Button color="success">Create new category</Button>
      </Link>
    );
  }
}