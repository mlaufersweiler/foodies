import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Dashboard from "./Components/Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
