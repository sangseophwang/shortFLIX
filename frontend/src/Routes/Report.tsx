import React, { useState, useEffect } from "react";
import Report_Layout from "../Components/Report/Report_Layout";

type ReportProps = {
  match: any;
};

const Report = ({ match }: ReportProps) => {
  const [ReportPage, setReportPage] = useState("");
  useEffect(() => {
    setReportPage(match.params.id);
  }, []);
  return (
    <main>
      {ReportPage === "1" && <Report_Layout isFirst={true} />}
      {ReportPage === "2" && <Report_Layout isFirst={false} />}
    </main>
  );
};

export default Report;
