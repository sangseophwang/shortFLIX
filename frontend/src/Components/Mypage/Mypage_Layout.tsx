import React from "react";
import "./scss/Mypage_Layout.scss";
import Navigation from "../Common/Navigation";
import Mypage_Title from "./Mypage_Title";
import Mypage_Taste from "./Mypage_Taste";
import Mypage_LikedList from "./Mypage_LikedList";
import Mypage_Recent from "./Mypage_Recent";

const Mypage_Layout = () => {
  return (
    <article className="Mypage__Container">
      <Navigation />
      <div className="Mypage__Grid">
        <Mypage_Title />
        <Mypage_Taste />
        <Mypage_LikedList />
        <Mypage_Recent />
      </div>
    </article>
  );
};

export default Mypage_Layout;
