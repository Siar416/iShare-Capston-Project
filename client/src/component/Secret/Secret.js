import React from "react";
import axios from "axios";

function Secret({ secret }) {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target);

    // delete from server
    axios
      .delete(`http://localhost:5000/${e.target.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>{secret.title}</h1>
      <p>{secret.secret}</p>
      <p>{secret.author}</p>
      <p>{secret.tag}</p>
      <button id={secret._id} onClick={handleDelete}>
        Delete Post
      </button>
    </div>
  );
}

export default Secret;
