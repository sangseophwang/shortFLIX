import React from "react";
import "./scss/Navigation.scss";
import Logo from "../Assets/Image/shortFLIX.png";
import { Link } from "react-router-dom";
import Login from "../Common/Login";

// type NavigationProps = {
//   link: "login" | "mypage";
// };

// // TODO: 링크 수정 필요 (로그인, 로그아웃)
// const links = {
//   login: {
//     name: "로그인",
//     href: "/login",
//   },
//   mypage: {
//     name: "마이페이지",
//     href: "/mypage",
//   },
// };

export default function Navigation(): JSX.Element {
  // const handleClick = () => {
  //   if (link === "login") {
  //     alert("hi");
  //   }
  // };
  return (
    <div id="Navigation">
      <Link to="/">
        <img src={Logo} alt="shortFLIX LOGO" />
      </Link>
      <div>
        <Link to="/introduction">소개</Link>
        <Login />
        {/* <Link to={links[link].href} onClick={handleClick}>
          {links[link].name}
        </Link> */}
      </div>
    </div>
  );
}
