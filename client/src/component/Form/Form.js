import React, { useState } from "react";
import axios from "axios";
import "./Form.scss";
const Filter = require("bad-words");

function Form() {
  const filter = new Filter();
  const [formData, setFormData] = useState({
    title: "",
    secret: "",
    author: "",
    tag: "",
  });

  const [formError, setFormError] = useState({
    hasError: false,
    errorMessage: "",
  });

  const validateForm = () => {
    let hasErrors = false;
    let errorMessage = "";

    if (
      !formData.title ||
      !formData.secret ||
      !formData.author ||
      !formData.tag
    ) {
      hasErrors = true;
      errorMessage = "Please fill out all fields";
    }

    if (/\s/.test(formData.tag)) {
      hasErrors = true;
      errorMessage = "Tags cannot contain spaces";
    }

    setFormError({ hasErrors, errorMessage });
    return hasErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setFormData({
      title: "",
      secret: "",
      author: "",
      tag: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = validateForm();
    if (!hasError) {
      axios
        .post(process.env.REACT_APP_API_URL, {
          title: filter.clean(formData.title),
          secret: filter.clean(formData.secret),
          author: filter.clean(formData.author),
          tag: filter.clean(formData.tag),
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
    <form className="form" onSubmit={handleSubmit} onReset={clearForm}>
      <div>
        <label htmlFor="title">Secret Title</label>
        <input
          maxLength="60"
          type="text"
          className="form-control"
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
          className="form-control"
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
          className="form-control"
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
          className="form-control"
          name="tag"
          value={formData.tag}
          onChange={handleChange}
          placeholder="Add a tag"
        />
      </div>

      <button type="submit" className="btn btn-outline-light">
        Submit
      </button>

      <button
        type="reset"
        style={{ marginLeft: "20px" }}
        className="btn btn-outline-light"
      >
        Reset
      </button>

      {formError && (
        <div className="form__validation">{`${formError.errorMessage}`}</div>
      )}
    </form>
  );
}

export default Form;
