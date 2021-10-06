import React from "react";
import "./scss/Mypage_Layout.scss";
import Navigation from "../Common/Navigation";

const Mypage_Layout = () => {
  return (
    <article className="Mypage__Container">
      <Navigation link={"logout"} />
      <div className="Mypage__Grid">
        <section>xxx님의 페이지</section>
        <section>
          <div>xxx님의 취향</div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </section>
        <section>
          <div>xxx님이 좋아한 목록</div>
          <div>이미지</div>
        </section>
        <section>
          <div>최근에 본 리뷰 영상</div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Mypage_Layout;
