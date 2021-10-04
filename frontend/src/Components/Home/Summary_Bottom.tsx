import React from "react";
import "./scss/Summary_Bottom.scss";
import WorldMap from "../Common/Image/WorldMap.png";

export default function Summary() {
  return (
    <div className="Summary-Bottom__Container">
      <div className="Summary-Bottom__Contents">
        <div className="Summary-Bottom__Title">
          <div>
            <h1>전 세계 컨텐츠를</h1>
            <h1>짧은 시간으로</h1>
            <h1>즐길 수 있습니다!</h1>
          </div>
          <div>
            <p className="Summary-Bottom__Subtitle">
              바쁜 현대사회를 살아가는 우리에게 하루를 마치고 즐기는 잠깐의
              여유시간만큼 소중한건 없죠.
            </p>
            <p>
              하지만 그 시간을 무엇과 함께, 어떻게 즐겨야할지 몰라 고민인 당신!
            </p>
            <p>그런 여러분을 위해 가성비 넘치고 알찬 컨텐츠로 준비했습니다.</p>
            <p>
              단 몇 번의 클릭만으로 당신이 원하는 영상을 마음껏 즐기시면 됩니다.
            </p>
            <p>자, 이제 리뷰의 세계로 떠나볼까요?</p>
          </div>
        </div>
        <img src={WorldMap} alt="" />
      </div>
    </div>
  );
}
