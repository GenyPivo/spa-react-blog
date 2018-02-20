import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function SingleCategory(props) {
  return (
    <List.Item className="category-item">
      <Link to={`/categories/${props.category.id}/posts`} className="post-link">
        <h2>{props.category.name}</h2>
        <p>{props.category.description}</p>
      </Link>
      <Link to={`/categories/${props.category.id}/comments/new`}>
        <Button color='black'>
          Add new comment
        </Button>
      </Link>
      <Link to={`/categories/${props.category.id}/comments`}>
        <Button color='red'>
          Show comments
        </Button>
      </Link>
    </List.Item>
  );
}
