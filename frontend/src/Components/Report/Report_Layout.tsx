import React from "react";
import "./scss/Report_Layout.scss";
import Report_Sidebar from "./Report_Sidebar";
import Report_Title from "./Report_Title";
import Report_Source from "./Report_Source";
import Report_Graph from "./Report_Graph";
import Report_Insight from "./Report_Insight";
import First_Chart1 from "./First_Chart1";
import First_Chart2 from "./First_Chart2";
import Second_Chart1 from "./Second_Chart1";
import Second_Chart2 from "./Second_Chart2";

type ReportPageProps = {
  isFirst: boolean;
};

const First_Layout = ({ isFirst }: ReportPageProps) => {
  return (
    <div className="Report__Container">
      {isFirst ? (
        <>
          <Report_Sidebar />
          <Report_Title>
            🔍 OTT 서비스 이용률 {"&"} 서비스별 이용률
          </Report_Title>
          <Report_Graph />
          <Report_Graph />
          <article className="Report__Chart">
            <First_Chart1 />
          </article>
          <article className="Report__Chart">
            <First_Chart2 />
          </article>
          <Report_Source>
            출처 : 미디어통계포털 2019, 2020 방송매체이용행태조사
          </Report_Source>
          <Report_Insight />
        </>
      ) : (
        <>
          <Report_Sidebar />
          <Report_Title>🔍 OTT 서비스 연령대별 이용시간</Report_Title>
          <Report_Graph />
          <Report_Graph />
          <article className="Report__Chart">
            <Second_Chart1 />
          </article>
          <article className="Report__Chart">
            <Second_Chart2 />
          </article>
          <Report_Source>출처 : 미디어통계포털</Report_Source>
          <Report_Insight />
        </>
      )}
    </div>
  );
};

export default First_Layout;
