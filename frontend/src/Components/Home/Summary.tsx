import React from "react";
import "./scss/Summary.scss";
import WorldMap from "../Common/Image/WorldMap.png";

export default function Summary() {
  return (
    <div className="Summary__Container">
      <div className="Summary__Contents">
        <h1>1000여가지의 엄선된 리뷰를 만나보세요.</h1>
        <p className="Summary__Subtitle">
          바쁜 현대사회를 살아가는 우리에게 하루를 마치고 즐기는 잠깐의
          여유시간만큼 소중한건 없죠.
        </p>
        <p>
          하지만 그 시간을 무엇과 함께, 어떻게 즐겨야할지 몰라 고민인 당신을
          위해 가성비 넘치고 알찬 컨텐츠로 준비했습니다.
        </p>
        <p>
          단 몇 번의 클릭만으로 당신이 원하는 영상을 마음껏 즐기시면 됩니다.
        </p>
        <p>자 이제 리뷰의 세계로 떠나볼까요?</p>
        <img src={WorldMap} alt="" />
      </div>
    </div>
  );
}
