import React from "react";
import MainPage from "./components/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light p-4 rounded w-60 h-90">
      <div className="mb-3">
      </div>
      <MainPage />
    </div>
  );
}

export default App;
