import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signin-screen" className="container-fluid">
      <div className="row">
        <h3>Sign up</h3>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md float-start col-6">
            <input
              className="form-control"
              id="wd-username"
              placeholder="username"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              type="password"
              className="form-control"
              id="wd-password"
              placeholder="password"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              type="password"
              className="form-control"
              id="wd-password-confirm"
              placeholder="password"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <Link id="wd-signin-btn" to="/Kanbas/Dashboard">
            <button
              id="wd-group-btn"
              className="btn btn-md btn-primary text-light me-1 mt-2 col-12"
            >
              Sign up
            </button>
          </Link>
        </div>
      </div>
      <br />
      <Link id="wd-signup-link" to="/Kanbas/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}
