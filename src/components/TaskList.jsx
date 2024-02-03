import React from "react";
import TaskLine from "./TaskLine";
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = ({ taskList = [], deleteFunction = () => {} }) => {
  return (
    <div className="overflow-auto p-4 rounded">
      {taskList.map((task, index) => (
        <TaskLine
          key={index}
          index={index}
          title={task.title}
          desc={task.desc}
          removeFunction={deleteFunction}
        />
      ))}
    </div>
  );
};

export default TaskList;


