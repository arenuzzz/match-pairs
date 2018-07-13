import React from "react";
import { Route, Switch } from "react-router";

import App from "../components/App.jsx";

const Home = () => <div>Home</div>;
const NotFound = () => <div>NotFound</div>;

export default (
  <div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
