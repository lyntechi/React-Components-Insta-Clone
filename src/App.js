/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import PostsPage from './components/PostsContainer/PostsPage';

// import the PostsPage and SearchBar and add them to the App

const App = () => {
  return (
    <div className="App">
     {}
      <PostsPage />
    </div>
  );
};



export default App;
/* export default means to export the entire component and now
we can name it whatever we want. but you should name it the same thing
*/  
