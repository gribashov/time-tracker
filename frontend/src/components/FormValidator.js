import React from "react";
import { useInput } from "../hooks/useInput";

export const FormValidator = () => {
  const email = useInput("", { isEmpty: true, minLength: 3 });
  const password = useInput("", { isEmpty: true, minLength: 2 });

  return (
    <form>
      <div className="mb-3">
        <label for="text" className="form-label">
          Email
        </label>
        <input
          type="text"
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          value={email.value}
          className={`form-control ${
            email.isCameOut && email.isEmpty
              ? "border border-danger shadow-none"
              : "border border-primary"
          }`}
        />
        <small className="text-danger">Please enter email</small>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          value={password.value}
          className={`form-control ${
            password.isCameOut && password.isEmpty
              ? "border border-danger shadow-none"
              : "border border-primary"
          }`}
        />
        <small className="text-danger">Please enter password</small>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
};
