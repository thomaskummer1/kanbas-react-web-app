import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
export default function LessonControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" && (
        <div>
          <FaPencil
            className="text-primary me-2 mb-1"
            onClick={() => editModule(moduleId)}
          />
          <FaTrash
            className="text-danger me-2 mb-1"
            onClick={() => deleteModule(moduleId)}
          />
          <GreenCheckmark />
          <BsPlus className="fs-4" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      )}
    </div>
  );
}
