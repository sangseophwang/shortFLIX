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
      <Link to="/report/1">
        <button>Report_1</button>
      </Link>
      <Link to="/report/2">
        <button>Report_2</button>
      </Link>
      <Link to="/introduction">
        <button className="GoBack">{"<"} 돌아가기</button>
      </Link>
    </nav>
  );
};

export default Report_Sidebar;
