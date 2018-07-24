import React from "react";

import App from "components/App";

const Home = () => <div>Home</div>;
const NotFound = () => <div>NotFound</div>;

const routes = [
  {
    path: "/",
    exact: true,
    component: App
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
