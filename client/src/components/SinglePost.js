import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function SingleCategory(props) {
  const postMaxLength = 500;
  let buttonText = 'Show';
  let content = props.post.content;

  if (props.cut === true && content.length > postMaxLength) {
    buttonText = 'Show more >>';
    content = content.substring(0, postMaxLength) + ' ...';
  }

  return (
    <List.Item className="post-item">
      <h2>{props.post.name}</h2>
      <h5>Posted on: {props.post.created_at}</h5>
      <div className="ui ignored info message">{content}</div>
      <Link to={`/posts/${props.post.id}`}>
        <Button color='orange'>
          {buttonText}
        </Button>
      </Link>
      <Link to={`/posts/${props.post.id}#comments`}>
        <Button color='green'>
          Show comments
        </Button>
      </Link>
    </List.Item>
  );
}
