import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Secret from "../Secret/Secret";

function Secrets({ secrets }) {
  // get secrets from database

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
