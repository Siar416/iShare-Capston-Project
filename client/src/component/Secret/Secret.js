import React from "react";

function Secret({ secret }) {
  return (
    <div>
      <h1>{secret.title}</h1>
      <p>{secret.secret}</p>
      <p>{secret.author}</p>
    </div>
  );
}

export default Secret;
