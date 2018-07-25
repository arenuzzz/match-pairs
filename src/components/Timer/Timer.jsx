import React from "react";

export default ({ mins = 0, secs = 0 }) => {
  return (
    <div>
      {`${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`}
    </div>
  );
};
