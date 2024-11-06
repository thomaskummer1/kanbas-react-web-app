import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import AssignmentDeleter from "./AssignmentDeleter";
export default function AssignmentControlButtons(assignmentID: any) {
  const dispatch = useDispatch();
  return (
    <div className="float-end">
      <button
        id="wd-add-module-btn"
        className="btn btn-md btn-danger me-1"
        data-bs-toggle="modal"
        data-bs-target="#wd-delete-assignment-dialog"
      >
        Delete
      </button>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <AssignmentDeleter
        dialogTitle="Delete Assignment?"
        deleteAssignment={() =>
          dispatch(deleteAssignment(assignmentID.assignmentID))
        }
      />
    </div>
  );
}
