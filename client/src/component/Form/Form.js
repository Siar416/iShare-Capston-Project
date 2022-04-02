import React, { useState } from "react";
import axios from "axios";
import "./Form.scss";

// const URL = "http://localhost:5000/secrets";

function Form() {
  const [formData, setFormData] = useState({
    title: "",
    secret: "",
    author: "",
    tag: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //clear form
  const clearForm = () => {
    setFormData({
      title: "",
      secret: "",
      author: "",
      tag: "",
    });
  };

  //handle submit and clear the form after submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_URL, {
        title: formData.title,
        secret: formData.secret,
        author: formData.author,
        tag: formData.tag,
      })
      .then((res) => {
        console.log(res);
        setFormData({
          title: "",
          secret: "",
          author: "",
          tag: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form class="form" onSubmit={handleSubmit} onReset={clearForm}>
      <div>
        <label htmlFor="title">Secret Title</label>
        <input
          maxLength="60"
          type="text"
          class="form-control"
          name="title"
          value={formData.title}
          onChange={handleChange}
          aria-describedby="emailHelp"
          placeholder="Title"
        />
      </div>

      <div>
        <label htmlFor="author">Author</label>
        <input
          maxLength="60"
          type="text"
          class="form-control"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Your alias"
        />
      </div>

      <div>
        <label htmlFor="secret">Secret Message</label>
        <input
          maxLength="60"
          class="form-control"
          name="secret"
          value={formData.secret}
          onChange={handleChange}
          placeholder="Share secret"
        />
      </div>

      <div>
        <label htmlFor="secret">Tag</label>
        <input
          maxLength="60"
          class="form-control"
          name="tag"
          value={formData.tag}
          onChange={handleChange}
          placeholder="Add a tag"
        />
      </div>

      {/* <div>
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
      </div> */}

      <button type="submit" class="btn btn-outline-light">
        Submit
      </button>

      <button
        type="reset"
        style={{ marginLeft: "20px" }}
        class="btn btn-outline-light"
      >
        Reset
      </button>
    </form>
  );
}

export default Form;
