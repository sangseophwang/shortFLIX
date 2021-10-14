import React from "react";
import "./scss/Mypage_Layout.scss";
import Navigation from "../Common/Navigation";
import Mypage_Title from "./Mypage_Title";
import Mypage_Taste from "./Mypage_Taste";
import Mypage_LikedList from "./Mypage_LikedList";
import Mypage_Recent from "./Mypage_Recent";
import { useHistory } from "react-router";
import axios from "axios";

const Mypage_Layout = () => {
  const username = sessionStorage.getItem("username");
  const history = useHistory();
  const URL =
    "http://kdt-vm-0202003.koreacentral.cloudapp.azure.com:5000/logout";
  const onLogoutHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    axios.get(URL).then((response) => {
      console.log(response.data);
      sessionStorage.removeItem("username");
      history.push("/");
    });
  };
  return (
    <article className="Mypage__Container">
      <Navigation />
      <div className="Mypage__Grid">
        <div className="Mypage__Header">
          <Mypage_Title name={username} />
          <button onClick={onLogoutHandler}>로그아웃</button>
        </div>
        <Mypage_Taste name={username} />
        <Mypage_LikedList name={username} />
        <Mypage_Recent />
      </div>
    </article>
  );
};

export default Mypage_Layout;
