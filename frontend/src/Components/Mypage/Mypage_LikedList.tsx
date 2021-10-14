import React, { PropsWithoutRef } from "react";
import "./scss/Mypage_LikedList.scss";
import Slider_Item from "../Common/Slider_Item";

type NameProps = {
  name: any;
};

const Mypage_LikedList = ({ name }: NameProps) => {
  return (
    <section className="Mypage__LikedList">
      <div>{name}님이 좋아한 목록</div>
      <Slider_Item />
    </section>
  );
};

export default Mypage_LikedList;
