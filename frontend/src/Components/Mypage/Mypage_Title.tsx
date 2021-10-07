import React from "react";
import "./scss/Mypage_Title.scss";
import Button from "../Common/Button";
import { Link } from "react-router-dom";

const Mypage_Title = () => {
  return (
    <section className="Mypage__Title">
      <h1>xxx님의 페이지</h1>
      <Link to="/result">
        <Button styles="btn-sm">결과 다시 보러가기</Button>
      </Link>
      <Link to="/test">
        <Button styles="btn-sm">랜덤 추천받기</Button>
      </Link>
    </section>
  );
};

export default Mypage_Title;
