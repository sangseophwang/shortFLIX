import React from "react";
import "./scss/Mypage_Title.scss";
import Button from "../Common/Button";
import { Link } from "react-router-dom";

type NameProps = {
  name: any;
};

const Mypage_Title = ({ name }: NameProps) => {
  return (
    <section className="Mypage__Title">
      <h1>{name}님의 페이지</h1>
    </section>
  );
};

export default Mypage_Title;
