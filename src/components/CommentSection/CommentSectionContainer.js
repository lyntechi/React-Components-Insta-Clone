// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import DummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
const[comments, setComments]= useState(DummyData);
  return (
    <div>
    
      {comments.map(function(item){
        return [<Comment comment={item} />]
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
