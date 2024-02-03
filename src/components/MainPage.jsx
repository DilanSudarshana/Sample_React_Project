import React, { useState } from "react";
import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";

const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const descHandler = (e) => {
    setDesc(e.target.value);
  };

  const submitHandler = () => {
    if ((title, desc)) {
      setTasks([...tasks, { title: title, desc: desc }]);
      setTitle("");
      setDesc("");
    }
    
  };

  return (
    <Container
      className="shadow-lg p-5 bg-secondary text-white overflow-auto"
      style={{ borderRadius: "20px", width: "80vh", height: "90vh" }}
    >
      <h1 style={{ textAlign: "center" }}>ToDo</h1>
      <Row>
        <Col>
          <TaskList taskList={tasks} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Add Title"
              value={title}
              onChange={titleHandler}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Add Description"
              value={desc}
              onChange={descHandler}
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="primary" onClick={submitHandler}>
              Add
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
