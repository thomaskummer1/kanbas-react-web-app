import { FaPlus } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function AssignmentControls() {
  const { cid } = useParams();
  return (
    <div id="wd-assignment-controls" className="text-nowrap d-flex">
      <div className="input-group input-group-lg px-5 float-start">
        <span className="input-group-text">
          <BiSearch />
        </span>
        <input
          className="form-control"
          id="wd-search-assignment"
          placeholder="Search..."
        />
      </div>
      <button
        id="wd-group-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <Link to={`/Kanbas/Courses/${cid}/Assignments/new`}>
        <button
          id="wd-add-assignment-btn"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
      </Link>
    </div>
  );
}
