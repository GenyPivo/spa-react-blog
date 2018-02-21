import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from '../actions/categories';
import SingleCategory from './SingleCategory';
import { List, Dimmer, Loader } from 'semantic-ui-react';

class Categories extends Component {

  componentDidMount() {
    if (!this.props.categories.fetched) this.props.getCategories();
  }

  render() {
    const categories = this.props.categories;

    const categoriesCollection = (
      <List>
        {categories.hasOwnProperty('list') && categories.list.map(category => <SingleCategory category={category} key={category.id}/>)}
      </List>
    );

    const emptyCollectionMessage = (
      <h3 className="no-data">There are no categories yet</h3>
    );

    return (
      <div>
        <h1>Categories List</h1>
        <Dimmer active={!this.props.categories.fetched}>
          <Loader />
        </Dimmer>
        {(categories.hasOwnProperty('list') && categories.list.length === 0) ? emptyCollectionMessage : categoriesCollection }
      </div>
    );
  }
}

// Categories.propTypes = {
//   categories: PropTypes.object.isRequired,
//   getCategories: PropTypes.func.isRequired
// };

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, { getCategories })(Categories);
