import React from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function SingleCategory(props) {
  return (
    <List.Item className="category-item">
      <h2>{props.category.name}</h2>
      <p>{props.category.description}</p>
      <Link to={`/categories/${props.category.id}/comments/new`} className="item">
        Add new comment
      </Link>
      <Link to={`/categories/${props.category.id}/comments`} className="item">
        Show comments
      </Link>
    </List.Item>
  );
}
