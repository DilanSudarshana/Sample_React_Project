import React from "react";

const TaskLine = ({ title, desc }) => {
  return (
    <div className="d-flex rounded bg-danger bg-gradient mb-3 align-items-center p-4" style={{ borderRadius: '20px' }}>
      <div>
        <strong>{title}</strong>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default TaskLine;

