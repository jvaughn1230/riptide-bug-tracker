import React from "react";
import "./ViewBugs.styles.css";

import BugCard from "../BugCard/BugCard";
import { bugsData } from "../../tempData";

const ViewBugs = () => {
  const dataMapped = bugsData.map((bug) => <BugCard bug={bug} />);
  return <div>{dataMapped}</div>;
};

export default ViewBugs;

// Map Bug Card Here
