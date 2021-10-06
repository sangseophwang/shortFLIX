import React from "react";
import "./scss/GoBack.scss";
import { Link } from "react-router-dom";

export default function GoBack() {
  return (
    <Link to="/">
      <button className="Back">{"<"} Back</button>
    </Link>
  );
}
