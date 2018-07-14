import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root.jsx";


ReactDOM.render(<Root />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./components/Root.jsx", () => {
    ReactDOM.render(<Root />, document.getElementById("root"));
  });
}
