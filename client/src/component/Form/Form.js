import React, { useState } from "react";
import axios from "axios";
import "./Form.scss";

function Form() {
  const [formData, setFormData] = useState({
    title: null,
    secret: null,
    author: null,
    tag: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // set state
    setFormData({
      title: e.target.title.value,
      secret: e.target.secret.value,
      author: e.target.author.value,
      tag: e.target.tag.value,
    });

    axios
      .post("http://localhost:5000/secrets", {
        title: e.target.title.value,
        secret: e.target.secret.value,
        author: e.target.author.value,
        tag: e.target.tag.value,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // clear form
    e.target.title.value = null;
    e.target.secret.value = null;
    e.target.author.value = null;
  };

  return (
    <form class="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Secret Title</label>
        <input
          type="text"
          class="form-control"
          name="title"
          aria-describedby="emailHelp"
          placeholder="Title"
        />
      </div>

      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          class="form-control"
          name="author"
          placeholder="Your alias"
        />
      </div>

      <div>
        <label htmlFor="secret">Secret Message</label>
        <input
          class="form-control"
          name="secret"
          placeholder="Share a secret"
        />
      </div>

      <div>
        <label>Tag</label>
        <select name="tag" htmlFor="tag" className="form-control">
          <option name="shady" value="shady">
            #shady
          </option>

          <option name="funny" value="funny">
            #funny
          </option>

          <option name="scary" value="scary">
            #scary
          </option>

          <option name="mysterious" value="mysterious">
            #mysterious
          </option>

          <option name="adventurous" value="adventurous">
            #adventurous
          </option>

          <option name="cool" value="cool">
            #cool
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
