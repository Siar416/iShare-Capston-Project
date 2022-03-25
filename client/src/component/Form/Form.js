import React, { useState, useEffect } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    title: null,
    secret: null,
    author: null,
    tag: null,
  });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000")
  //     .then((res) => setFormData(res.data))
  //     .catch((err) => console.log(err));
  // }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // set state
    setFormData({
      title: e.target.title.value,
      secret: e.target.secret.value,
      author: e.target.author.value,
      tag: "n/a",
    });
    console.log("here");

    axios
      .post("http://localhost:5000", {
        title: e.target.title.value,
        secret: e.target.secret.value,
        author: e.target.author.value,
        tag: "n/a",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // clear form
    e.target.title.value = null;
    e.target.secret.value = null;
    e.target.author.value = null;
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__container">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Title" />
        </div>

        <div className="form__container">
          <label htmlFor="secret">Secret</label>
          <input type="text" name="secret" placeholder="Share a secret" />
        </div>

        <div className="form__container">
          <label htmlFor="author">Author</label>
          <input type="text" name="author" placeholder="Your alias" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
