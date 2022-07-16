import React from 'react'
import {useGetPostByLimitQuery} from '../servies/api';

function GetPostByLimit() {

    const {data} = useGetPostByLimitQuery(3);
    console.log(data);
  return (
   <>
    <div>GetPostByLimit</div>
    {
        data && data.map((data) => (
            <div className="box" key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </div>
        ))
    }
   </>
  )
}

export default GetPostByLimit