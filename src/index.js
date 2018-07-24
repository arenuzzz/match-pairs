import React from "react";
import { render } from "react-dom";
import Root from "components/Root";

const renderApp = () => {
  render(<Root />, document.getElementById("root"));
};

renderApp();

if (module.hot) {
  module.hot.accept("components/Root", () => {
    renderApp();
  });
}
