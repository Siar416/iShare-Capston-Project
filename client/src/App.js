import React from "react";
import Form from "./component/Form/Form";
import Secrets from "./component/Secrets/Secrets";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/secrets")
      .then((res) => setSecrets(res.data))
      .catch((err) => console.log(err));
  }, [secrets]);

  return (
    <div>
      <h1>Hello World</h1>
      <Form />
      <Secrets secrets={secrets} setSecrets={setSecrets} />
    </div>
  );
};

export default App;
