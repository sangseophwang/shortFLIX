import React from "react";
import "./scss/Mypage_Recent.scss";
import Slider_Item from "../Common/Slider_Item";

const Mypage_Recent = () => {
  return (
    <section className="Mypage__Recent">
      <div>최근에 본 리뷰 영상</div>
      <Slider_Item />
    </section>
  );
};

export default Mypage_Recent;
