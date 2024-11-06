import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function EnrollmentCourses({
  dialogTitle,
  courses,
}: {
  dialogTitle: string;
  courses: any[];
}) {
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [registeredCourses, setRegisteredCourses] = useState(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const filteredEnrollments = enrollments.filter(
    (e: { user: any }) => e.user === currentUser._id
  );
  let userEnrollments: any[] = [];
  for (let i = 0; i < filteredEnrollments.length; i++) {
    if (filteredEnrollments[i].course === courses[i]._id) {
      userEnrollments.push(courses[i]);
    }
  }
  const dispatch = useDispatch();
  return (
    <div
      id="wd-add-module-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {dialogTitle}{" "}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {!registeredCourses &&
                courses.map((course) => (
                  <li className="list-group-item" key={course._id}>
                    {course.name}
                    {userEnrollments.includes(course) ? (
                      <button
                        className="btn btn-danger float-end"
                        onClick={() =>
                          dispatch(
                            deleteEnrollment({
                              user: currentUser._id,
                              course: course._id,
                            })
                          )
                        }
                      >
                        unEnroll
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary float-end"
                        onClick={() =>
                          dispatch(
                            addEnrollment({
                              user: currentUser._id,
                              course: course._id,
                            })
                          )
                        }
                      >
                        Enroll
                      </button>
                    )}
                  </li>
                ))}
              {registeredCourses &&
                userEnrollments.map((course) => (
                  <li className="list-group-item" key={course._id}>
                    {course.name}
                    <button
                      className="btn btn-danger float-end"
                      onClick={() =>
                        dispatch(
                          deleteEnrollment({
                            user: currentUser._id,
                            course: course._id,
                          })
                        )
                      }
                    >
                      unEnroll
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel{" "}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setRegisteredCourses(!registeredCourses)}
            >
              See Registered{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}