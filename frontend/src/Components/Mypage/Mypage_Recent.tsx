import React from "react";
import "./scss/Mypage_Recent.scss";
import Slider from "../Common/Slider";

const Mypage_Recent = () => {
  return (
    <section className="Mypage__Recent">
      <div>최근에 본 리뷰 영상</div>
      <Slider />
    </section>
  );
};

export default Mypage_Recent;
