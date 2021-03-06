import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    <>
      {props.isLogin === true ? <Component {...props} /> : <Redirect to="/" />}
    </>
  </Route>
);

export default ProtectedRoute;
