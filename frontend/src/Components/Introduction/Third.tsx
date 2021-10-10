import React from "react";
import "./scss/Third.scss";
import Introduction_Image_2 from "../Assets/Image/Introduction_Image_2.png";
import { Link } from "react-router-dom";

export default function Third() {
  return (
    <article className="Third__Container">
      <div className="Third__Contents">
        <img className="Third__Image" src={Introduction_Image_2} alt="Image" />
        <section className="Third__Text">
          <h1 className="Third__Title">
            그리고 새로운 세상에 맞춰 우리의 삶은
            <div>빠르게 바뀌고 있습니다.</div>
          </h1>
          <p>
            시시각각 빠르게 변하는 컨텐츠 시장의 흐름에 맞춰 우리의 고민은
            즐거움과 비례하여 늘어가고 있습니다. 컨텐츠가 많아질수록 볼거리는
            점점 늘어나지만 도대체 무엇을 봐야할지, 또는 과연 이 작품에 소중한
            내 시간을 사용해야할지에 대한 고민이죠. 또한 원하는 작품을 골랐지만
            긴 러닝타임때문에 밤을 지새워가며 보기에는 우리의 집중력과 체력은
            그리 여유롭지 않습니다.
          </p>
          <Link to="/report/2">
            <button>더 알아보기 {">"}</button>
          </Link>
        </section>
      </div>
    </article>
  );
}
