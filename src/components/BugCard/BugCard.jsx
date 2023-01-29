import React, { useState } from "react";
import ViewBug from "../ViewBug/ViewBug";

const BugCard = ({ bug }) => {
  const [active, setActive] = useState(false);

  const closeBug = () => setActive(false);

  return (
    <div>
      <h1>{bug.title}</h1>
      <button onClick={() => setActive(true)}>View Details</button>
      {active ? <ViewBug exit={closeBug} bug={bug} /> : null}
    </div>
  );
};

export default BugCard;
