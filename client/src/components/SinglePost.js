import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function SingleCategory(props) {
  return (
    <List.Item className="post-item">
      <h2>{props.post.name}</h2>
      <p>{props.post.content}</p>
      <Link to={`/posts/${props.post.id}/comments/new`}>
        <Button color='orange'>
          Add new comment
        </Button>
      </Link>
      <Link to={`/posts/${props.post.id}/comments`}>
        <Button color='green'>
          Show comments
        </Button>
      </Link>
    </List.Item>

  );
}