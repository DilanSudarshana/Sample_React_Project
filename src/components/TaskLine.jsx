import React from "react";

const TaskLine = ({ title, desc }) => {
  return (
    <div className="d-flex rounded bg-danger bg-gradient mb-3 align-items-center p-4" style={{ borderRadius: "20px" }}>
  <div className="flex-grow-1">
    <strong>{title}</strong>
    <p>{desc}</p>
  </div>
  <div className="d-flex align-items-center">
    <button type="button" className="btn btn-danger">
      Delete
    </button>
  </div>
</div>

  );
};

export default TaskLine;
