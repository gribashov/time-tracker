// hooks
import { Authorization } from "./components/Authorization";
import { Registration } from "./components/Registration";
import illustration from "./illustrations/time.svg";

// styles
import "./index.scss";

function App() {
  return (
    <>
      <div className="d-flex row align-items-center transformator">
        <div className="col mx">
          <img src={illustration} alt="logo" className="image-transform" />
        </div>
        <div className="col mx">
          <Registration />
          {/* <Authorization /> */}
        </div>
      </div>
    </>
  );
}

export default App;
