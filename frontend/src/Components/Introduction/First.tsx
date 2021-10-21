import React from "react";
import "./scss/First.scss";
import Logo from "../Assets/Image/shortFLIX.png";
import Intro_Graph from "../Assets/Image/Intro_Graph.png";
import Button from "../Common/Button";
import { Link } from "react-router-dom";

export default function First() {
  return (
    <article className="First__Container">
      <div className="First__Contents">
        <section className="First__Title">
          <img src={Logo} alt="Logo" />
          <h2>for your busy life</h2>
          <p>
            바쁜 하루를 끝내고 맞이한 휴식시간에 무엇을 해야할지 모르시겠다구요?
          </p>
          <p>당신이 원하는 컨텐츠가 바로 이 곳에 있습니다.</p>
          <Link to="/test">
            <Button styles="btn-sm btn-red">시작하기</Button>
          </Link>
        </section>
        <section className="First__Image">
          <img src={Intro_Graph} alt="Intro_Graph" />
        </section>
      </div>
    </article>
  );
}
