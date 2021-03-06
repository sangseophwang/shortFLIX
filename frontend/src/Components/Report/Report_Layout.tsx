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
            π OTT μλΉμ€λ³ {"&"} μ°λ Ήλ³ μλΉμ€ μ΄μ©λ₯ 
          </Report_Title>
          <Report_Graph id="graph1" />
          <Report_Graph id="graph2" />
          <Report_Chart id="chart1" />
          <Report_Chart id="chart2" />
          <Report_Source>
            μΆμ² : λ°©μ‘ν΅κ³ν¬νΈ 2019, 2020λ μμμλ£
          </Report_Source>
          <Report_Insight id="insight1" />
        </>
      ) : (
        <>
          <Report_Sidebar />
          <Report_Title>
            π OTT μλΉμ€ μ°λ Ήλλ³ {"&"} μ΄μ©λΉλλ³ νκ·  μ΄μ©μκ°
          </Report_Title>
          <Report_Graph id="graph3" />
          <Report_Graph id="graph4" />
          <Report_Chart id="chart3" />
          <Report_Chart id="chart4" />
          <Report_Source>μΆμ² : λ―Έλμ΄ν΅κ³ν¬νΈ 2020λ μμμλ£</Report_Source>
          <Report_Insight id="insight2" />
        </>
      )}
    </div>
  );
};

export default Report_Layout;
