import React from 'react'
import {useUpdatePostMutation} from '../servies/api';

function UpdatePost() {

  const {updatePost } = useUpdatePostMutation();

  
  const updatePostData = {
    id: 1,
    title: 'This is Update Post Title',
    body: 'This is Update Post Body',
    userId: 1,
  }

  return (
    <div>
      <button onClick={() => updatePost(updatePostData)}>Update</button>
    </div>
  )
}

export default UpdatePost