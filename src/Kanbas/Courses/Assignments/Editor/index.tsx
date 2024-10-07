import { CiCalendar } from "react-icons/ci";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h5 className="mt-3 ">
        <label htmlFor="wd-name">Assignment Name</label>
      </h5>

      <div className="input-group input-group-lg float-start">
        <input
          className="form-control"
          id="wd-search-assignment"
          value="A1 - ENV + HTML"
        />
      </div>
      <br />
      <div className="border mt-5">
        <p className="mt-3 px-3">
          The assignment is{" "}
          <span style={{ color: "red" }}>available online </span>{" "}
        </p>
        <p className="mt-3 px-3">
          Submit a link to the landing page of your Web application running on
          Netlify.
        </p>
        <p className="mt-3 px-3">
          The landing page should include the following:
        </p>
        <ul>
          <li className="mt-1 px-3">Your full name and section</li>
          <li className="mt-1 px-3">Links to each lab assignment</li>
          <li className="mt-1 px-3">Link to the Kanbas application</li>
          <li className="mt-1 px-3">
            Links to all relevant source code repositories
          </li>
        </ul>
        <p className="mt-3 px-3">
          The Kanbas application should include a link to navigate back to the
          landing page.
        </p>
      </div>
      <br />
      <div className="row align-items-center">
        <div className="col-5">
          <h5 className="float-end">Points</h5>
        </div>
        <div className="col-7">
          <div className="input-group input-group float-start">
            <input
              className="form-control"
              id="wd-search-assignment"
              value="100"
            />
          </div>
        </div>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-5">
          <h5 className="float-end">Assignment Group</h5>
        </div>
        <div className="col-7">
          <div className="input-group input-group float-start">
            <select className="form-select form-select">
              <option selected>ASSIGNMENTS</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-5">
          <h5 className="float-end">Display Grade as</h5>
        </div>
        <div className="col-7">
          <div className="input-group input-group float-start">
            <select className="form-select form-select">
              <option selected>Percentage</option>
              <option>Points</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row align-items-top mt-3">
        <div className="col-5">
          <h5 className="float-end">Submission Type</h5>
        </div>
        <div className="col-7">
          <div className="border container-fluid float-start">
            <div className="input-group input-group mt-3 g-3">
              <select className="form-select form-select">
                <option selected>Online</option>
              </select>
            </div>
            <h4 className="mt-3">Online Entry Options</h4>
            <div className="form-check mt-3 g-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-text-entry"
              />
              <label className="form-check-label" htmlFor="wd-text-entry">
                Text Entry
              </label>
            </div>
            <div className="form-check mt-3 g-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-website-url"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>
            <div className="form-check mt-3 g-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-media-recordings"
              />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>
            <div className="form-check mt-3 g-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-student-annotation"
              />
              <label
                className="form-check-label"
                htmlFor="wd-student-annotation"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check mt-3 mb-3 g-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-file-upload"
              />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Upload
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-top mt-3">
        <div className="col-5">
          <h5 className="float-end">Assign</h5>
        </div>
        <div className="col-7">
          <div className="border container-fluid float-start">
            <label htmlFor="wd-assign-to">
              <h4 className="mt-2">Assign to</h4>
            </label>
            <div className="input-group input-group mb-3 float-start">
              <input
                className="form-control"
                id="wd-assign-to"
                value="Everyone"
              />
            </div>
            <h5 className="mt-3">
              <label htmlFor="wd-due-date">Due</label>
            </h5>
            <div className="input-group mb-3">
              <input
                type="date"
                className="form-control"
                id="wd-due-date"
                value="2024-05-13"
              />
              <span className="input-group-text" id="basic-addon2">
                <CiCalendar />
              </span>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="wd-available-from">
                  <h5>Available from</h5>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="wd-available-from"
                    value="2024-05-06"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    <CiCalendar />
                  </span>
                </div>
              </div>
              <div className="col">
                <label htmlFor="wd-available-until">
                  <h5>Until</h5>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="wd-available-until"
                    value="2024-05-20"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    <CiCalendar />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="float-end">
        <button
          id="wd-add-assignment-btn"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          Save
        </button>
        <button
          id="wd-group-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
