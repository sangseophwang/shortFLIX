import React from "react";
import "./scss/Report_Sidebar.scss";
import Logo from "../Common/Image/shortFLIX.png";
import { Link } from "react-router-dom";

const Report_Sidebar = () => {
  return (
    <nav className="Report__Sidebar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <button
        onClick={() => {
          window.location.replace("/report/1");
        }}
      >
        Report_1
      </button>
      <button
        onClick={() => {
          window.location.replace("/report/2");
        }}
      >
        Report_2
      </button>
      <Link to="/introduction">
        <button className="GoBack">{"<"} 돌아가기</button>
      </Link>
    </nav>
  );
};

export default Report_Sidebar;
