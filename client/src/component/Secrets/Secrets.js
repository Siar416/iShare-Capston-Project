import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Secret from "../Secret/Secret";

function Secrets() {
  // get secrets from database
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setSecrets(res.data))
      .catch((err) => console.log(err));
  }, [secrets]);

  return (
    <div className="secrets">
      <h1>Secrets</h1>
      <div className="secrets__container">
        {secrets.map((secret) => (
          <Secret secret={secret} />
        ))}
      </div>
    </div>
  );
}

export default Secrets;
