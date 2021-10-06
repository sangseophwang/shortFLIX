import React from "react";
import "./scss/Summary.scss";
import Image from "../Common/Image/Summary.png";

export default function Summary() {
  return (
    <article className="Summary__Container">
      <section className="Summary__Contents">
        <h1>1000여가지의 엄선된 리뷰를 만나보세요.</h1>
        <p className="Summary__Subtitle">
          재미있어보여서 클릭했다가 실망하고 시간만 날린 경험, 아마 다들 한번씩
          겪었을거라 생각합니다.
        </p>
        <p>
          저희가 추천드리는 컨텐츠에서는 그런 걱정 잠시 놓으셔도 괜찮습니다.
        </p>
        <p>
          직접 엄선한 퀄리티 높은 컨텐츠로 당신의 소중한 휴식시간을 알차게
          만들어드립니다!
        </p>
        <img src={Image} alt="Summary Image" />
      </section>
    </article>
  );
}
