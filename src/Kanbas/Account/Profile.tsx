import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container-fluid">
      <div className="row">
        <h3>Profile</h3>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md float-start">
            <input
              className="form-control"
              id="wd-username"
              placeholder="username"
              value="alice"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              value="123"
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
              className="form-control"
              id="wd-firstname"
              placeholder="First Name"
              value="Alice"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              className="form-control"
              id="wd-lastname"
              value="Wonderland"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              className="form-control"
              id="wd-dob"
              value="2000-01-01"
              type="date"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <div className="input-group input-group-md mt-2 float-start">
            <input
              className="form-control"
              id="wd-email"
              value="alice@wonderland"
              type="email"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 col-lg-4">
          <Link id="wd-signin-btn" to="/Kanbas/Account/Signin">
            <button
              id="wd-group-btn"
              className="btn btn-md btn-danger text-light me-1 mt-2 col-12"
            >
              Sign out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
