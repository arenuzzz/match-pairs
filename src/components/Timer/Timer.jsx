import React from "react";

export default ({ label, mins, secs }) => (
  <div>
    <b>{label}</b>
    <p>
      {`${mins < 10 ? "0" + mins : mins}:
        ${secs < 10 ? "0" + secs : secs}`}
    </p>
  </div>
);
