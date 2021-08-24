import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
// hooks
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";

// styles
import "./index.scss";

function App() {
  return (
    <>
      <Redirect from="/" to="/registration" />

      <Route path={process.env.PUBLIC_URL + "/registration"} exact>
        <Registration />
      </Route>

      <Route path={process.env.PUBLIC_URL + "/login"} exact>
        <Login />
      </Route>
    </>
  );
}

export default App;
