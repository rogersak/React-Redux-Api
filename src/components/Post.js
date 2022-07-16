import React from "react";
import { useCreatePostMutation } from "../servies/api";

function CreatePost() {
    
  const { CreatePost } = useCreatePostMutation();
  const newPost = {
    userId: 1,
    title: "Hello I am Rogers @k ",
    body: "I Belong To Hindu Religon , I loved iT",
  };
  return (
    <>
      <div>CreatePost</div>
      <div className="box" key={newPost.id}>
        <h3>{newPost.title}</h3>
        <p>{newPost.body}</p>
      </div>

      <button
        onClick={() => 
         {
            CreatePost(newPost)
         }
        }
      >
        Post
      </button>
    </>
  );
}

export default CreatePost;
