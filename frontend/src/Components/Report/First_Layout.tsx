import React from "react";
import "./scss/First_Layout.scss";
import Logo from "../Common/Image/shortFLIX.png";
import First_Chart1 from "./First_Chart1";
import First_Chart2 from "./First_Chart2";
import { Link } from "react-router-dom";

const First_Layout = () => {
  return (
    <div className="Report__Container">
      <nav className="Report-First__Sidebar">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to="/report/1">
          <button>Report_1</button>
        </Link>
        <Link to="/report/2">
          <button>Report_2</button>
        </Link>
        <Link to="/introduction">
          <button className="GoBack">{"<"} 돌아가기</button>
        </Link>
      </nav>
      <header className="Report-First__Title">
        <h1>🔍 OTT 서비스 이용률 {"&"} 서비스별 이용률</h1>
      </header>
      <article className="Report-First__Graph">
        <h2>OTT 서비스 이용률</h2>
      </article>
      <article className="Report-First__Graph">
        <h2>OTT 서비스별 이용률</h2>
      </article>
      <article className="Report-First__Chart">
        <First_Chart1 />
      </article>
      <article className="Report-First__Chart">
        <First_Chart2 />
      </article>
      <article className="Report-First__Source">
        <h3>출처 : 미디어통계포털 2019, 2020 방송매체이용행태조사</h3>
      </article>
      <article className="Report-First__Insight">
        <h3>인사이트</h3>
        <p>
          - 코로나가 시작된 2019년에 비해 2020년에 급격히 OTT 서비스 이용률이
          증가했다. 전반적으로 최소 2배, 많게는 8배 가까이 증가했다.
        </p>
        <p>
          - OTT 이용률은 66.3%로 <span>2019년(52.0%)에 비해 14.3%p 증가</span>
          하여 2019년의 증가폭(9.3%p)을 넘어섬. 특히 40대 이상의 증가폭이 커
          40대와 50대는 각각 18.8%p, 27.3%p 증가했으며 60대와 70세 이상도 각각
          17.0%p, 6.9%p 증가함
        </p>
        <p>
          - OTT 서비스별로는 <span>유튜브 이용률이 62.3% </span>로 전년(47.8%)
          대비 크게 증가했으며 넷플릭스 이용률도 16.3%로 전년 (4.9%)에 비해
          급격히 성장함
        </p>
        <p>
          - OTT 서비스별로는
          <span> 유튜브 이용률이 62.3%로 전년(47.8%) 대비 크게 증가</span>했으며
          넷플릭스 이용률도 16.3%로 전년 (4.9%)에 비해 급격히 성장함
        </p>
      </article>
    </div>
  );
};

export default First_Layout;
