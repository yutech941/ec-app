import React from "react";
import { Switch, Route } from "react-router";
import { Home, Login } from "./templates";
import { LoginContainer } from "./containers";

const Router = () => {
  return (
    <Switch>
      {/* <Route exact path={"/login"} component={LoginContainer} /> */}
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  );
};
export default Router;
