import React from "react";
import "./scss/Mypage_LikedList.scss";
import Slider_Item from "../Common/Slider_Item";

const Mypage_LikedList = () => {
  return (
    <section className="Mypage__LikedList">
      <div>xxx님이 좋아한 목록</div>
      <Slider_Item />
    </section>
  );
};

export default Mypage_LikedList;
