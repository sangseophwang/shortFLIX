import React from "react";
import "./scss/Third.scss";
import Graph_Test from "../Common/Image/Graph_Test.png";
import { Link } from "react-router-dom";

export default function Third() {
  return (
    <article className="Third__Container">
      <div className="Third__Contents">
        <img className="Third__Image" src={Graph_Test} alt="Graph" />
        <section className="Third__Text">
          <h1 className="Third__Title">
            그리고 새로운 세상은 우리를 중심으로 바뀌고 있습니다.
          </h1>
          <p>
            코로나가 발병한 이후, 우리는 외부에서의 자유를 잃게 됐지만 대신
            새로운 가능성에 눈을 뜨게 됐습니다. 우리가 가지고 있는 수많은 스마트
            기기들로 잃어버린 자유를 충족시킬 수 있다는 가능성 말이죠. 그리고
            지금은 또 하나의 세상으로써 우리에게 없어서는 안될 존재가 되었죠.
          </p>
          <Link to="/report/2">
            <button>더 알아보기 {">"}</button>
          </Link>
        </section>
      </div>
    </article>
  );
}
