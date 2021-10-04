import React from "react";
import "./scss/Fourth.scss";
import ShortFormContents from "../Common/Image/ShortFormContents.png";

export default function Fourth() {
  return (
    <article className="Fourth__Container">
      <div className="Fourth__Contents">
        <section className="Fourth__Text">
          <h1 className="Fourth__Title">
            재미난게 넘쳐나는 지금, <div>우리는 어떻게 즐겨야 할까?</div>
          </h1>
          <p>
            코로나가 발병한 이후, 우리는 외부에서의 자유를 잃게 됐지만 대신
            새로운 가능성에 눈을 뜨게 됐습니다. 우리가 가지고 있는 수많은 스마트
            기기들로 잃어버린 자유를 충족시킬 수 있다는 가능성 말이죠. 그리고
            지금은 또 하나의 세상으로써 우리에게 없어서는 안될 존재가 되었죠.
          </p>
        </section>
        <img
          className="Fourth__Image"
          src={ShortFormContents}
          alt="ShortFormContents"
        />
      </div>
    </article>
  );
}
