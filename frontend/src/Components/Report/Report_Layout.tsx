import React from "react";
import "./scss/Report_Layout.scss";
import Report_Sidebar from "./Report_Sidebar";
import Report_Title from "./Report_Title";
import Report_Source from "./Report_Source";
import Report_Graph from "./Report_Graph";
import Report_Chart from "./Report_Chart";
import Report_Insight from "./Report_Insight";

type ReportPageProps = {
  isFirst: boolean;
};

const Report_Layout = ({ isFirst }: ReportPageProps) => {
  return (
    <div className="Report__Container">
      {isFirst ? (
        <>
          <Report_Sidebar />
          <Report_Title>
            🔍 OTT 서비스 이용률 {"&"} 서비스별 이용률
          </Report_Title>
          <Report_Graph id="graph1" />
          <Report_Graph id="graph2" />
          <Report_Chart id="chart1" />
          <Report_Chart id="chart2" />
          <Report_Source>
            출처 : 미디어통계포털 2019, 2020 방송매체이용행태조사
          </Report_Source>
          <Report_Insight id="insight1" />
        </>
      ) : (
        <>
          <Report_Sidebar />
          <Report_Title>🔍 OTT 서비스 연령대별 이용시간</Report_Title>
          <Report_Graph id="graph3" />
          <Report_Graph id="graph4" />
          <Report_Chart id="chart3" />
          <Report_Chart id="chart4" />
          <Report_Source>출처 : 미디어통계포털</Report_Source>
          <Report_Insight id="insight2" />
        </>
      )}
    </div>
  );
};

export default Report_Layout;
