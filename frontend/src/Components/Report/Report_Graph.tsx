import React from "react";
import "./scss/Report_Graph.scss";
import graph1 from "../Assets/Image/graph1.png";
import graph2 from "../Assets/Image/graph2.png";
import graph3 from "../Assets/Image/graph3.png";
import graph4 from "../Assets/Image/graph4.png";

type GraphSelectProps = {
  id: string;
};

const Report_Graph = ({ id }: GraphSelectProps) => {
  return (
    <>
      {id === "graph1" && (
        <article className="Report__Graph">
          <img src={graph1} alt="" />
        </article>
      )}
      {id === "graph2" && (
        <article className="Report__Graph">
          <img src={graph2} alt="" />
        </article>
      )}
      {id === "graph3" && (
        <article className="Report__Graph">
          <img src={graph3} alt="" />
        </article>
      )}
      {id === "graph4" && (
        <article className="Report__Graph">
          <img src={graph4} alt="" />
        </article>
      )}
    </>
  );
};

export default Report_Graph;
