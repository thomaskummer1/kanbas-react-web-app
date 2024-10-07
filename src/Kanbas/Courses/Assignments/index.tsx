import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import AssignmentHeadControllButtons from "./AssignmentHeadControlButtons";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <br />
      <AssignmentControls />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentHeadControllButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row d-flex align-items-center">
                <div className="col-1">
                  <BsGripVertical className="me-2 fs-3 " />
                </div>
                <div className="col-1">
                  <FaRegEdit className="me-2 fs-3 text-success" />
                </div>
                <div className="col-8">
                  {" "}
                  <Link
                    className="wd-assignment-link unstyled"
                    to="/Kanbas/Courses/1234/Assignments/123"
                  >
                    A1 - ENV + HTML
                  </Link>
                  <p>
                    <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May
                    13 at 11:59pm | 100 pts
                  </p>
                </div>
                <div className="col-2">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row d-flex align-items-center">
                <div className="col-1">
                  <BsGripVertical className="me-2 fs-3 " />
                </div>
                <div className="col-1">
                  <FaRegEdit className="me-2 fs-3 text-success" />
                </div>
                <div className="col-8">
                  {" "}
                  <Link
                    className="wd-assignment-link unstyled"
                    to="/Kanbas/Courses/1234/Assignments/123"
                  >
                    A2 - CSS + BOOTSTRAP
                  </Link>
                  <p>
                    <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 13 at 12:00am | <b>Due</b>{" "}
                    May 20 at 11:59pm | 100 pts
                  </p>
                </div>
                <div className="col-2">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row d-flex align-items-center">
                <div className="col-1">
                  <BsGripVertical className="me-2 fs-3 " />
                </div>
                <div className="col-1">
                  <FaRegEdit className="me-2 fs-3 text-success" />
                </div>
                <div className="col-8">
                  {" "}
                  <Link
                    className="wd-assignment-link unstyled"
                    to="/Kanbas/Courses/1234/Assignments/123"
                  >
                    A3 - JS + REACT
                  </Link>
                  <p>
                    <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 20 at 12:00am | <b>Due</b>{" "}
                    May 27 at 11:59pm | 100 pts
                  </p>
                </div>
                <div className="col-2">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
