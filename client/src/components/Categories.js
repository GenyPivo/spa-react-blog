import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from '../actions/categories';
import SingleCategory from './SingleCategory';
import { List } from 'semantic-ui-react';

class Categories extends Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const categories = this.props.categories;

    const categoriesCollection = (
      <List>
        {console.log(categories)}
        {categories.map(category => <SingleCategory category={category} key={category.id}/>)}
      </List>
    );

    const emptyCollectionMessage = (
      <p>There are no categories yet</p>
    );

    return (
      <div>
        <h1>Categories List</h1>
        {categories.length === 0 ? emptyCollectionMessage : categoriesCollection }
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
