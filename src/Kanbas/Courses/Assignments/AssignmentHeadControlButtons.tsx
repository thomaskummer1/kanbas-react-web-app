import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
export default function AssignmentHeadControllButtons() {
  return (
    <div className="float-end">
      <div
        className="border border-dark rounded-pill inline p-1"
        style={{ display: "inline" }}
      >
        40% of Total
      </div>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
