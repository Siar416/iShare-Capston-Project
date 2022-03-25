import React from "react";

function Secret({ secret, handleDelete }) {
  return (
    <div>
      <h1>{secret.title}</h1>
      <p>{secret.secret}</p>
      <p>{secret.author}</p>
      <button id={secret._id} onClick={handleDelete}>
        Delete Post
      </button>
    </div>
  );
}

export default Secret;
