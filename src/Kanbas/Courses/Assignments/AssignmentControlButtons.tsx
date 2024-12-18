import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import AssignmentDeleter from "./AssignmentDeleter";
import * as assignmentClient from "./client";
export default function AssignmentControlButtons(assignmentID: any) {
  const dispatch = useDispatch();
  const removeAssignment = async (assignmentID: string) => {
    await assignmentClient.deleteAssignment(assignmentID);
    dispatch(deleteAssignment(assignmentID));
  };
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
        deleteAssignment={() => removeAssignment(assignmentID.assignmentID)}
      />
    </div>
  );
}
