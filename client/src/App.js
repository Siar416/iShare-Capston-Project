import React from "react";
import Form from "./component/Form/Form";
import MainNav from "./component/MainNav/MainNav";
import Secrets from "./component/Secrets/Secrets";
import AboutModal from "./component/AboutModal/AboutModal";
import HowToModal from "./component/HowToModal/HowToModal";
import { useState, useEffect } from "react";
import axios from "axios";
import "./global.scss";

const App = () => {
  const [secrets, setSecrets] = useState([]);
  const [search, setSearch] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [isOpenHowTo, setIsOpenHowTo] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  // on mount
  useEffect(() => {
    if (search === "") {
      axios
        .get(process.env.REACT_APP_URL)
        .then((res) => {
          setSecrets(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`${process.env.REACT_APP_URL}/tags/${search}`)
        .then((res) => {
          setSecrets(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [secrets]);

  return (
    <div>
      <MainNav
        handleSearch={handleSearch}
        setIsOpen={setIsOpen}
        setIsOpenHowTo={setIsOpenHowTo}
      />
      {isOpen && <AboutModal isOpen={() => setIsOpen()} />}
      {isOpenHowTo && <HowToModal shown={() => setIsOpenHowTo()} />}

      <Form />
      <Secrets secrets={secrets} setSecrets={setSecrets} />
    </div>
  );
};

export default App;
