import React from "react";
import "./scss/Navigation.scss";
import Logo from "../Assets/Image/shortFLIX.png";
import { Link } from "react-router-dom";

export default function Navigation(): JSX.Element {
  const loggedInfo = sessionStorage.getItem("username");
  return (
    <div id="Navigation">
      <Link to="/">
        <img src={Logo} alt="shortFLIX LOGO" />
      </Link>
      <div>
        <Link to="/introduction">소개</Link>
        {!loggedInfo ? (
          <Link to="/login">로그인</Link>
        ) : (
          <Link to="/mypage">마이페이지</Link>
        )}
      </div>
    </div>
  );
}
