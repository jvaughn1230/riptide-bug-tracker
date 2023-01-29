import React from "react";
import "./ViewBug.css";

const ViewBug = ({ exit, bug }) => {
  return (
    <div className="bug-details">
      <h1>{bug.title}</h1>
      <p>{bug.details}</p>
      <button onClick={exit}>Exit</button>
    </div>
  );
};

export default ViewBug;
