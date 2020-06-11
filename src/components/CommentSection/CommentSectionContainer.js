// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import DummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  
const[comments, setComments]= useState(props.comments);
  return(
   <div>
   
 <CommentInput />
 
    </div>
   
   )//this closes commentsection return
};//this closes commentsection arrow function

export default CommentSection;
