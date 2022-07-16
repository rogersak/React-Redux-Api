import React from "react";
import { useGetAllPostQuery } from "../servies/api";

function GetPost() {
  const { data } = useGetAllPostQuery();
  console.log(data);
  return (
    <div className="getPost">
      {data && data.map((data) => (
        <div className="box" key={data.id} id={data.id}>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ))}
    </div>
  );
}

export default GetPost;
