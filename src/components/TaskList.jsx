import React from "react";
import TaskLine from "./TaskLine";
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = ({ taskList = [] }) => {
  return (
    <div className="overflow-auto p-4 rounded">
      {taskList.map((line, index) => (
        <TaskLine key={index} title={line.title} desc={line.desc} />
      ))}
    </div>
  );
};

export default TaskList;

