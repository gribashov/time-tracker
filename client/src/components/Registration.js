// libraries
import React from "react";
import { Link } from "react-router-dom";
// hooks
import { useInput } from "../hooks/useInput";

export const Registration = () => {
  const username = useInput("", { empty: true, minLength: 4, maxLength: 22 });
  const email = useInput("", { empty: true, validEmail: true });
  const password = useInput("", { empty: true, minLength: 4, maxLength: 22 });
  const password2 = useInput("", { empty: true, minLength: 4, maxLength: 22 });

  return (
    <>
      <h1 className="mb-3">Create account</h1>
      <form>
        <div className="mb-3">
          <label for="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            onChange={(e) => username.onChange(e)}
            onBlur={(e) => username.onBlur(e)}
            value={username.value}
            className={`form-control 
          ${
            (username.isCameOut && username.isEmpty) ||
            (username.isMinLength && !username.isEmpty) ||
            (username.isMaxLength && !username.isEmpty)
              ? "border border-danger shadow-none"
              : "border border-primary"
          }
          `}
          />
          {username.isCameOut && username.isEmpty && (
            <small className="text-danger">Please enter username</small>
          )}
          {username.isMinLength && !username.isEmpty && (
            <small className="text-danger">Username input must be at least 4 characters</small>
          )}
          {username.isMaxLength && !username.isEmpty && (
            <small className="text-danger">Username must be less than 22 characters</small>
          )}
        </div>
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
            (password.isMaxLength && !password.isEmpty) ||
            password2.value !== password.value
              ? "border border-danger shadow-none"
              : "border border-primary"
          }
          `}
          />
          {password.isCameOut && password.isEmpty && (
            <small className="text-danger">Please enter password</small>
          )}
          {password.isMinLength && !password.isEmpty && (
            <small className="text-danger">Password input must be at least 4 characters</small>
          )}
          {password.isMaxLength && !password.isEmpty && (
            <small className="text-danger">Password must be less than 22 characters</small>
          )}
        </div>
        <div className="mb-3">
          <label for="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            onChange={(e) => password2.onChange(e)}
            onBlur={(e) => password2.onBlur(e)}
            value={password2.value}
            className={`form-control 
          ${
            (password2.isCameOut && password2.isEmpty) ||
            (password2.isMinLength && !password2.isEmpty) ||
            (password2.isMaxLength && !password2.isEmpty) ||
            password2.value !== password.value
              ? "border border-danger shadow-none"
              : "border border-primary"
          }
          `}
          />
          {password2.isCameOut && password2.isEmpty && (
            <small className="text-danger">Please confirm password</small>
          )}
          {password.value !== password2.value && !password2.isEmpty && (
            <small className="text-danger">Passwords do not match</small>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100 mt-3"
          disabled={
            !username.isValidInput ||
            !email.isValidInput ||
            !password.isValidInput ||
            !password2.value
          }>
          Sign Up
        </button>
      </form>
      <Link to={process.env.PUBLIC_URL + "/login"}>
        <nav class="nav justify-content-center">
          <a className="nav-link text-xs" href="/">
            Sign in
          </a>
        </nav>
      </Link>
    </>
  );
};
