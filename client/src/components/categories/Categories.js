import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../actions/categories';
import SingleCategory from './SingleCategory';
import { List } from 'semantic-ui-react';

class Categories extends Component {

  componentDidMount() {
    if (!this.props.categories.fetched) this.props.getCategories();
  }

  render() {
    const categories = this.props.categories;

    const categoriesCollection = (
      <List>
        {categories.hasOwnProperty('list') && categories.list.map(category => <SingleCategory category={category}
                                                                                              key={category.id}/>)}
      </List>
    );

    const emptyCollectionMessage = (
      <h3 className="no-data">There are no categories yet</h3>
    );

    return (
      <div>
        <h1>Categories List</h1>
        {(categories.hasOwnProperty('list') && categories.list.length === 0) ? emptyCollectionMessage : categoriesCollection}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, { getCategories })(Categories);
