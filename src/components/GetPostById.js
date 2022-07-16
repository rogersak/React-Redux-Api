import React from 'react'
import {useGetPostByIdQuery} from '../servies/api';

function GetPostById() {

    const {data} = useGetPostByIdQuery(5);
    console.log(data);
  return (
<>
<div>GetPostById</div>
 {
    data ? <div className="box">
    <h3>{data.title}</h3>
    <p>{data.body}</p>
</div> : <div>No Data</div>
 }
</>
    
  )
}

export default GetPostById