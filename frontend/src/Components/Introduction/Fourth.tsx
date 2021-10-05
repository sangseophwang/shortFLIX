import React from "react";
import "./scss/Fourth.scss";
import ShortFormContents from "../Common/Image/ShortFormContents.png";

export default function Fourth() {
  return (
    <article className="Fourth__Container">
      <div className="Fourth__Contents">
        <img
          className="Fourth__Image"
          src={ShortFormContents}
          alt="ShortFormContents"
        />
        <section className="Fourth__Text">
          <h1 className="Fourth__Title">
            재미난게 넘쳐나는 지금, <div>우리는 어떻게 즐겨야 할까?</div>
          </h1>
          <p>
            컨텐츠의 인기가 높아지는만큼 다양하고 재미있는 새로운 작품들이 매일
            쏟아져나오죠. 하지만 우리의 삶은 그 모든 것들을 즐기기엔 시간이
            턱없이 부족합니다. 이런 시대의 흐름에 맞춰 틱톡, 유튜브 쇼츠,
            인스타그램 쇼츠 등 짧은 시간동안 강렬하게 보여주는 이른바 숏폼
            컨텐츠가 트렌드의 한 축으로 자리잡았습니다. 이런 트렌드에 맞춰 저희
            또한 긴 시간동안 시청하는 영화나 드라마를 짧게 압축한 리뷰 컨텐츠를
            추천해드리려 합니다.
          </p>
        </section>
      </div>
    </article>
  );
}
