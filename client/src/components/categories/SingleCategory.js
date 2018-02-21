import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { connect } from 'react-redux';
import { destroyCategory } from "../../actions/categories";

class SingleCategory extends Component {
  removeCategory(_this) {
    return function () {
      confirmAlert({
        title: 'You want to delete category',
        message: 'Are you sure to do this?',
        confirmLabel: 'Confirm',
        cancelLabel: 'Cancel',
        onConfirm: () => {
          _this.props.destroyCategory(_this.props.category.id);
        }
      })
    }
  }

  render() {
    return (
      <List.Item className="category-item">
        <div className="post-link">
          <h2 className="centered">{this.props.category.name}
            <Link to={`/categories/${this.props.category.id}/edit`}>
              <i className="right floated pencil alternate icon"/>
            </Link>
            <i className="right floated user trash alternate outline icon" onClick={this.removeCategory(this)}/>
          </h2>
          <p>{this.props.category.description}</p>
        </div>
        <Link to={`/categories/${this.props.category.id}/comments/new`}>
          <Button color='black'>
            Add new comment
          </Button>
        </Link>
        <Link to={`/categories/${this.props.category.id}/comments`}>
          <Button color='red'>
            Show comments
          </Button>
        </Link>
        <Link to={`/categories/${this.props.category.id}/posts`}>
          <Button color='grey'>
            Go to posts >>
          </Button>
        </Link>
      </List.Item>
    );
  }
}

export default connect(null, { destroyCategory })(SingleCategory);
