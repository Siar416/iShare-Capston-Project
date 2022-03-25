import React from "react";
import Form from "./component/Form/Form";
import Secrets from "./component/Secrets/Secrets";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setSecrets(res.data))
      .catch((err) => console.log(err));
  }, [secrets]);

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target);

    // delete from server
    axios
      .delete(`http://localhost:5000/${e.target.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // delete from client
    setSecrets(secrets.filter((secret) => secret._id !== e.target.id));
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Form />
      <Secrets secrets={secrets} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
