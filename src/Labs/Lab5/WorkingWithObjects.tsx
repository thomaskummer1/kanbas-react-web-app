import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const client = require("./client");
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const [module, setModule] = useState("");
  const [moduleName, setModuleName] = useState("");
  const fetchModule = async () => {
    const module = await client.getModule();
    setModule(JSON.stringify(module));
  };
  const fetchModuleName = async () => {
    const moduleName = await client.getModuleName();
    setModuleName(moduleName);
  };
  const updateTitle = async () => {
    const module = await client.updateName(assignment.title);
    setModule(JSON.stringify(module));
  };
  const updateScore = async () => {
    const module = await client.updateScore(assignment.score);
    setModule(JSON.stringify(module));
  };
  const updateCompleted = async () => {
    const module = await client.updateCompleted(assignment.completed);
    setModule(JSON.stringify(module));
  };
  const updateDescription = async () => {
    const module = await client.updateDescription(assignment.description);
    setModule(JSON.stringify(module));
  };
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />
      <h4>On your own section</h4>
      <button className="btn btn-primary me-2" onClick={fetchModule}>
        Fetch Module
      </button>
      <br />
      Response from server: <b>{module}</b>
      <hr />
      <button className="btn btn-primary me-2" onClick={fetchModuleName}>
        Fetch Module Name
      </button>
      <br />
      Response from server: <b>{moduleName}</b>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <button className="btn btn-primary me-2" onClick={updateTitle}>
        Update Title
      </button>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.score}
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
      />
      <button className="btn btn-primary me-2" onClick={updateScore}>
        Update Score
      </button>
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: Boolean(e.target.checked) })
        }
      />
      <button className="btn btn-primary me-2" onClick={updateCompleted}>
        Update Completed
      </button>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <button className="btn btn-primary me-2" onClick={updateDescription}>
        Update Description
      </button>
    </div>
  );
}
