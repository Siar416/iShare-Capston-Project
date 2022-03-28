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
      <div class="form__group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          class="form-control"
          name="author"
          placeholder="Your alias"
        />
      </div>

      <div class="form-group">
        <label htmlFor="title">Secret Title</label>
        <input
          type="text"
          class="form-control"
          name="title"
          aria-describedby="emailHelp"
          placeholder="Title"
        />
      </div>

      <div class="form-group">
        <label htmlFor="secret">Secret Message</label>
        <input
          class="form-control form__input"
          name="secret"
          placeholder="Share a secret"
        />
      </div>

      <div class="form-group">
        <label>Tag</label>
        <select name="tag" htmlFor="tag" className="form-control">
          <option name="shady" value="#shady">
            #shady
          </option>

          <option name="funny" value="#funny">
            #funny
          </option>

          <option name="scary" value="#scary">
            #scary
          </option>

          <option name="mysterious" value="#mysterious">
            #mysterious
          </option>

          <option name="adventurous" value="#adventurous">
            #adventurous
          </option>

          <option name="cool" value="#cool">
            #cool
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );

  // return (
  //   <div>
  //     <form className="form" onSubmit={handleSubmit}>
  //       <div className="form__container">
  //         <label htmlFor="title">Title</label>
  //         <input type="text" name="title" placeholder="Title" />
  //       </div>

  //       <div className="form__container">
  //         <label htmlFor="secret">Secret</label>
  //         <input type="text" name="secret" placeholder="Share a secret" />
  //       </div>

  //       <div className="form__container">
  //         <label htmlFor="author">Author</label>
  //         <input type="text" name="author" placeholder="Your alias" />
  //       </div>

  //       <div className="form__container">
  //         <label>Tag</label>
  //         <select name="tag" htmlFor="tag" className="form__container">
  //           <option name="shady" value="#shady">
  //             #shady
  //           </option>

  //           <option name="funny" value="#funny">
  //             #funny
  //           </option>

  //           <option name="scary" value="#scary">
  //             #scary
  //           </option>

  //           <option name="mysterious" value="#mysterious">
  //             #mysterious
  //           </option>

  //           <option name="adventurous" value="#adventurous">
  //             #adventurous
  //           </option>

  //           <option name="cool" value="#cool">
  //             #cool
  //           </option>
  //         </select>
  //       </div>

  //       <button>Submit</button>
  //     </form>
  //   </div>
  // );
}

export default Form;
