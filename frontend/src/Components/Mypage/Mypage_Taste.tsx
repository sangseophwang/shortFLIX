import React from "react";
import "./scss/Mypage_Taste.scss";
import Button from "../Common/Button";

type NameProps = {
  name: any;
};

const Mypage_Taste = ({ name }: NameProps) => {
  return (
    <section className="Mypage__Taste">
      <div>{name}님의 취향</div>
      <Button styles="btn-sm">호러</Button>
      <Button styles="btn-sm">로맨스</Button>
      <Button styles="btn-sm">액션</Button>
    </section>
  );
};

export default Mypage_Taste;
