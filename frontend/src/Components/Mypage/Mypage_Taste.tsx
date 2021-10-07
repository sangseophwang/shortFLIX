import React from "react";
import "./scss/Mypage_Taste.scss";
import Button from "../Common/Button";

const Mypage_Taste = () => {
  return (
    <section className="Mypage__Taste">
      <div>xxx님의 취향</div>
      <Button styles="btn-md">호러</Button>
      <Button styles="btn-md">로맨스</Button>
      <Button styles="btn-md">액션</Button>
    </section>
  );
};

export default Mypage_Taste;
