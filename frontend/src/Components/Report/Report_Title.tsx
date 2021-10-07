import React from "react";
import "./scss/Report_Title.scss";

type ReportTitleProps = {
  children: any;
};

const Report_Title = ({ children }: ReportTitleProps) => {
  return (
    <>
      <header className="Report__Title">
        <h1>{children}</h1>
      </header>
    </>
  );
};

export default Report_Title;
