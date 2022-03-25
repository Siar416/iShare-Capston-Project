import React from "react";
import axios from "axios";
import trashIcon from "../../assets/icons/trash.svg";
import heartIcon from "../../assets/icons/heart-fill.svg";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Card } from "react-bootstrap";

function Secret({ secret }) {
  const [likes, setLikes] = useState(secret.likes);

  const handleLike = () => {
    axios
      .patch(`http://localhost:5000/secrets/${secret._id}`)
      .then((res) => {
        console.log(res.data.likes);
        setLikes(res.data.likes);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target);

    // delete from server
    axios
      .delete(`http://localhost:5000/secrets/${e.target.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Card
      style={{
        width: "20rem",
        borderRadius: "5%",
      }}
    >
      <Card.Body className="card__body">
        <Card.Title>{secret.title}</Card.Title>
        <Card.Text>{secret.secret}</Card.Text>
        <Card.Text>{secret.author}</Card.Text>
        <img
          id={secret._id}
          onClick={handleDelete}
          src={trashIcon}
          alt="trash icon"
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "8px",
            right: "7px",
          }}
        />
        <p>
          <img id={secret._id} onClick={handleLike} src={heartIcon} />
          {likes}
        </p>
      </Card.Body>
    </Card>
  );
}

export default Secret;
