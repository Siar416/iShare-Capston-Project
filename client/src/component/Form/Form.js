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

  const [formError, setFormError] = useState(false);

  const validateForm = () => {
    let formIsValid = false;

    if (!formData.title) {
      formIsValid = true;
    }

    if (!formData.secret) {
      formIsValid = true;
    }

    if (!formData.author) {
      formIsValid = true;
    }

    if (!formData.tag) {
      formIsValid = true;
    }

    setFormError(formIsValid);
    return formIsValid;
  };

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
    const hasError = validateForm();
    if (!hasError) {
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
    }
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

      {formError && (
        <div className="form__validation">Please fill out all fields</div>
      )}
    </form>
  );
}

export default Form;
