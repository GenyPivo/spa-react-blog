import React from 'react';
import { List } from 'semantic-ui-react';

export default function SingleCategory(props) {
  return (
    <List.Item className="category-item">
      <h2>{props.comment.author}</h2>
      <p>{props.comment.content}</p>
    </List.Item>
  );
}
