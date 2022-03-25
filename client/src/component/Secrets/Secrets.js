import React from "react";
import Secret from "../Secret/Secret";

function Secrets({ secrets, setSecrets }) {
  return (
    <div className="secrets">
      <h1>Secrets</h1>
      <div className="secrets__container">
        {secrets.map((secret) => (
          <Secret
            key={secret._id}
            secret={secret}
            // handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Secrets;
