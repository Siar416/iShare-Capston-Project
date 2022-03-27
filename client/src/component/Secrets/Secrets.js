import React from "react";
import Secret from "../Secret/Secret";

function Secrets({ secrets }) {
  return (
    <div className="secrets">
      <div className="secrets__container">
        {secrets.map((secret) => (
          <Secret key={secret._id} secret={secret} />
        ))}
      </div>
    </div>
  );
}

export default Secrets;
