import React from "react";
import Form from "./component/Form/Form";
import MainNav from "./component/MainNav/MainNav";
import Secrets from "./component/Secrets/Secrets";
import AboutModal from "./component/AboutModal/AboutModal";
import { useState, useEffect } from "react";
import axios from "axios";
import "./global.scss";

const App = () => {
  const [secrets, setSecrets] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    axios
      .get(`http://localhost:5000/secrets/tags/${e.target.search.value}`)
      .then((res) => {
        setSecrets(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    e.target.search.value = "";
  };

  useEffect(() => {
    // TODO need to figure out why there is an infinit loop
    // console.log("render");
    axios
      .get("http://localhost:5000/secrets")
      .then((res) => setSecrets(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <MainNav handleSearch={handleSearch} setIsOpen={setIsOpen} />
      {isOpen && <AboutModal isOpen={() => setIsOpen()} />}

      <Form />
      <Secrets secrets={secrets} setSecrets={setSecrets} />
    </div>
  );
};

export default App;
