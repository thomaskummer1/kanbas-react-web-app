import { CiCalendar } from "react-icons/ci";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addAssignment, updateAssignment } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import * as courseClient from "../../client";
import * as assignmentsClient from "../client";
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  let ass;
  if (aid === "new") {
    ass = {
      _id: "new",
      title: "New Assignment",
      course: cid,
      description: "This is an example description",
      points: 100,
      due: "2021-12-01",
      available: "2021-11-20",
      until: "2021-12-01",
    };
  } else {
    ass = assignments.find(
      (assignment: { _id: string | undefined }) => assignment._id === aid
    );
  }

  const [assignment, setAssignment] = useState(ass);
  const createAssignmentForCourse = async (newAssignment: any) => {
    if (!cid) return;
    const assignment = await courseClient.createAssignmentForCourse(
      cid,
      newAssignment
    );
    dispatch(addAssignment(assignment));
  };
  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };
  return (
    <div id="wd-assignments-editor">
      <h5 className="mt-3 ">
        <label htmlFor="wd-name">Assignment Name</label>
      </h5>

      <div className="input-group input-group-lg float-start">
        <input
          className="form-control"
          id="wd-search-assignment"
          defaultValue={assignment && assignment.title}
          onChange={(e) =>
            setAssignment({
              ...assignment,
              title: e.target.value,
            } as typeof assignment)
          }
        />
      </div>
      <br />
      <div className="border mt-5">
        <input
          className="form-control"
          id="wd-search-assignment"
          defaultValue={assignment && assignment.description}
          onChange={(e) =>
            setAssignment({
              ...assignment,
              description: e.target.value,
            } as typeof assignment)
          }
        />
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
              type="number"
              defaultValue={assignment && assignment.points}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: e.target.value,
                } as unknown as typeof assignment)
              }
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
                defaultValue={assignment && assignment.due}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    due: e.target.value,
                  } as unknown as typeof assignment)
                }
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
                    defaultValue={assignment && assignment.available}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        available: e.target.value,
                      } as unknown as typeof assignment)
                    }
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
                    defaultValue={assignment && assignment.until}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        until: e.target.value,
                      } as unknown as typeof assignment)
                    }
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
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button
            id="wd-add-assignment-btn"
            className="btn btn-lg btn-danger me-1 float-end"
            onClick={() => {
              aid === "new"
                ? createAssignmentForCourse(assignment)
                : saveAssignment(assignment);
            }}
          >
            Save
          </button>
        </Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button
            id="wd-group-btn"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
}
