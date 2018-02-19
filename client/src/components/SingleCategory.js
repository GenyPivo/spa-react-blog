import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function SingleCategory(props) {
  return (
    <List.Item className="category-item">
      <h2>{props.category.name}</h2>
      <p>{props.category.description}</p>
    </List.Item>
  );
}
