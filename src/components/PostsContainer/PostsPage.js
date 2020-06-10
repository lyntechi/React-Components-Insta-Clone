//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data 


const PostsPage = () => {
 
  // set up state for your data
  let[posts, setPosts]= useState(dummyData)
  return (
    
    <div className="posts-container-wrapper">
      {/* <h1>Posts Page</h1> */}

      {posts.map(function(item){
      return [<Post post={item}/>
      ]
      
    })}

    </div>
  );
};

export default PostsPage;
