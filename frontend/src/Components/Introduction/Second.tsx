import React from "react";
import "./scss/Second.scss";
import Graph_Test from "../Common/Image/Graph_Test.png";
import { Link } from "react-router-dom";

export default function Second() {
  return (
    <article className="Second__Container">
      <div className="Second__Contents">
        <section className="Second__Title">
          <h1>세상은 코로나 전과 후로 나뉩니다.</h1>
        </section>
        <section className="Second__Article">
          <div className="Second__Text">
            <p>
              코로나가 발병한 이후, 우리는 외부에서의 자유를 잃게 됐지만 대신
              새로운 가능성에 눈을 뜨게 됐습니다. 우리가 가지고 있는 수많은
              스마트 기기들로 잃어버린 자유를 충족시킬 수 있다는 가능성 말이죠.
              그리고 지금은 또 하나의 세상으로써 우리에게 없어서는 안될 존재가
              되었죠.
            </p>
            <Link to="/report/1">
              <button>더 알아보기 {">"}</button>
            </Link>
          </div>
          <img className="Second__Image" src={Graph_Test} alt="Graph" />
        </section>
      </div>
    </article>
  );
}
