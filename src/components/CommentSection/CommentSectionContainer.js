// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";


const CommentSection = props => {
  // Add state for the comments
  
const[comments]= useState(props.comments);
  return(
   <div>
   {comments.map((item, index)=>{
     
     return <Comment comment={item} key={index} />

   })}

 <CommentInput />
 
    </div>
   
   )//this closes commentsection return
};//this closes commentsection arrow function

export default CommentSection;
