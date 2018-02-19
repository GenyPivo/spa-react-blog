import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import SingleCategory from './SingleCategory';

export default function CategoriesList({categories}) {

  const emptyCollectionMessage = (
    <p>There are no categories yet</p>
  );

  const categoriesCollection = (
    <List>
      {categories.map(category => <SingleCategory category={category} key={category.id}/>)}
    </List>
  );

  return (
    <div>
      {categories.length === 0 ? emptyCollectionMessage : categoriesCollection }
    </div>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
};
