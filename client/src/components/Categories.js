import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoriesList from './CategoriesList'
import PropTypes from 'prop-types';
import { getCategories } from '../actions/categories'

class Categories extends Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div>
        <h1>Categories List</h1>
        <CategoriesList categories={this.props.categories}/>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  getCategories: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, { getCategories })(Categories);
