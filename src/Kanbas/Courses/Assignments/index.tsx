import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import AssignmentHeadControllButtons from "./AssignmentHeadControlButtons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as courseClient from "../client";
import { setModules } from "../Modules/reducer";
import { useEffect } from "react";
import { setAssignments } from "./reducer";
export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const assignments = await courseClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-assignments">
      <br />
      {currentUser.role === "FACULTY" && <AssignmentControls />}
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            {currentUser.role === "FACULTY" && (
              <AssignmentHeadControllButtons />
            )}
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((assignment: any) => (
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
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                    <p>
                      <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                      <b>Not available until</b> {assignment.until} | <b>Due</b>{" "}
                      {assignment.due} | {assignment.points} pts
                    </p>
                  </div>
                  <div className="col-2">
                    {currentUser.role === "FACULTY" && (
                      <AssignmentControlButtons assignmentID={assignment._id} />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
