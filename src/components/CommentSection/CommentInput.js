// You do not need to do anything in this file
import React, {useState} from 'react';

const CommentInput = props => {
const[addComment, setAddComment]=useState('')
const inputHandler = (event) =>{
setAddComment(event.target.value)
event.preventDefault()
}

  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}

      />
    </form>
  );
};

export default CommentInput;
