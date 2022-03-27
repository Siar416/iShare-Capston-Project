import React from "react";
import Form from "./component/Form/Form";
import MainNav from "./component/MainNav/MainNav";
import Secrets from "./component/Secrets/Secrets";
import { useState, useEffect } from "react";
import axios from "axios";
import "./global.scss";

const App = () => {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    console.log("render");
    axios
      .get("http://localhost:5000/secrets")
      .then((res) => setSecrets(res.data))
      .catch((err) => console.log(err));
  }, [secrets, setSecrets]);

  return (
    <div>
      <MainNav />
      <Form />
      <Secrets secrets={secrets} setSecrets={setSecrets} />
    </div>
  );
};

export default App;
