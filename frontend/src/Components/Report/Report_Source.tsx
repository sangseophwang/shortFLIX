import React from "react";
import "./scss/Report_Source.scss";

type ReportSourceProps = {
  children: string;
};

const Report_Source = ({ children }: ReportSourceProps) => {
  return (
    <article className="Report__Source">
      <h3>{children}</h3>
    </article>
  );
};

export default Report_Source;
