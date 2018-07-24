import React from "react";
import { Route, Switch } from "react-router-dom";

import GamePage from "pages/GamePage";
import StartPage from "pages/StartPage";

const NotFound = () => <div>NotFound</div>;

// import routes from "./routes";

export default (
  <div>
    <Switch>
      {/* {routes.map(route => (
        <Route path={route.path} component={route.component} />
      ))} */}
      <Route exact path="/" component={StartPage} />
      <Route path="/game" component={GamePage} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
