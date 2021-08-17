import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
// hooks
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import illustration from "./illustrations/time.svg";

// styles
import "./index.scss";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {}, []);
  return (
    <>
      <div className="d-flex row align-items-center transformator">
        <div className="col mx">
          <img src={illustration} alt="logo" className="image-transform" />
        </div>
        <div className="col mx">
          <Redirect from="/" to="/registration" />

          <Route path={process.env.PUBLIC_URL + "/registration"} exact>
            <Registration />
          </Route>

          <Route path={process.env.PUBLIC_URL + "/login"} exact>
            <Login />
          </Route>
        </div>
      </div>
    </>
  );
}

export default App;
