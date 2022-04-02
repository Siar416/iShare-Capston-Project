import React from "react";
import axios from "axios";
import trashIcon from "../../assets/icons/trash.svg";
import heartIcon from "../../assets/icons/heart-fill.svg";
import { useState } from "react";
import moment from "moment";
import "./Secret.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function Secret({ secret }) {
  const [likes, setLikes] = useState(secret.likes);

  const handleLike = () => {
    if (localStorage.getItem(secret._id)) {
      return;
    }
    setLikes(likes + 1);
    localStorage.setItem(secret._id, true);

    axios
      .patch(`${process.env.REACT_APP_API_URL}/${secret._id}`)
      .then((res) => {
        console.log(res.data.likes);
        setLikes(res.data.likes);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target);

    axios
      .delete(`${process.env.REACT_APP_API_URL}/${e.target.id}`)
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
        color: "black",
      }}
    >
      <Card.Body className="card__body">
        <Card.Img />
        <div className="card__title">
          <Card.Title>{secret.title}</Card.Title>
          <img
            className="card__trash"
            id={secret._id}
            onClick={handleDelete}
            src={trashIcon}
            alt="trash icon"
          />
        </div>
        <Card.Text style={{ marginBottom: "10px", fontStyle: "italic" }}>
          {secret.author}
        </Card.Text>
        <Card.Text style={{ marginBottom: "10px" }}>{secret.secret}</Card.Text>
        <Card.Text className="card__tag" style={{ marginBottom: "10px" }}>
          {secret.tag}
        </Card.Text>
        <div className="card__footer">
          <p style={{ marginBottom: "10px" }}>
            {moment(secret.datePosted).fromNow()}
          </p>
          <p className="heart">
            <img
              className="heart__image"
              id={secret._id}
              onClick={handleLike}
              src={heartIcon}
              alt="heart icon"
            />
            {likes}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}
export default Secret;
