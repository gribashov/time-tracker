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

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="d-flex row nopadding">
        <div className="col mx">
          <embed
            src={illustration}
            alt="logo"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={preventDragHandler}></embed>
        </div>
        <div className="col">
          <div className="form">
            <Redirect from="/" to="/registration" />

            <Route path={process.env.PUBLIC_URL + "/registration"} exact>
              <Registration />
            </Route>

            <Route path={process.env.PUBLIC_URL + "/login"} exact>
              <Login />
            </Route>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
