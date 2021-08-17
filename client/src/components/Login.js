// libraries
import React from "react";
import { Link } from "react-router-dom";
// hooks
import { useInput } from "../hooks/useInput";

export const Login = () => {
  const email = useInput("", { empty: true, validEmail: true });
  const password = useInput("", { empty: true, minLength: 4, maxLength: 22 });

  return (
    <>
      <h1 className="mb-3">Login</h1>
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
              (email.isCameOut && email.isEmpty) || (email.isValidEmail && !email.isEmpty)
                ? "border border-danger shadow-none"
                : "border border-primary"
            }`}
          />
          {email.isCameOut && email.isEmpty && (
            <small className="text-danger">Please enter email</small>
          )}
          {email.isValidEmail && !email.isEmpty && (
            <small className="text-danger">Email is not valid</small>
          )}
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
            className={`form-control 
          ${
            (password.isCameOut && password.isEmpty) ||
            (password.isMinLength && !password.isEmpty) ||
            (password.isMaxLength && !password.isEmpty)
              ? "border border-danger shadow-none"
              : "border border-primary"
          }
          `}
          />
          {password.isCameOut && password.isEmpty && (
            <small className="text-danger">Please enter password</small>
          )}
          {password.isMinLength && !password.isEmpty && (
            <small className="text-danger">
              Password input must be at
              <br /> least 4 characters
            </small>
          )}
          {password.isMaxLength && !password.isEmpty && (
            <small className="text-danger">
              Password must be less than <br />
              22 characters
            </small>
          )}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            disabled={!email.isValidInput || !password.isValidInput}
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!email.isValidInput || !password.isValidInput}>
          Sign in
        </button>
      </form>
      <Link to={process.env.PUBLIC_URL + "/registration"}>
        <nav class="nav justify-content-center">
          <a className="nav-link text-xs" href="/">
            Sign up
          </a>
        </nav>
      </Link>
    </>
  );
};
