import React from 'react';
import { List } from 'semantic-ui-react';

export default function SingleCategory(props) {
  return (
    <List.Item className="custom-comment" id="comments">
      <h2>{props.comment.author} write:</h2>
      <p>{props.comment.content}</p>
    </List.Item>
  );
}
