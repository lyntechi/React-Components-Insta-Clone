// You do not need to do anything in this file. Look at the
 //Comment Sectionfile. 

import React from 'react';
import './Comment.css';

const Comment = props => {
console.log(props)
  return (
    <div className="comment-text">
      <span className="user">{props.post.username}</span>
      {' '}
      <span className="comment">{props.post.text}</span>
    </div>
  );
};


export default Comment;
