import React from "react";
import "./scss/Report_Graph.scss";

type GraphSelectProps = {
  id: string;
};

const Report_Graph = ({ id }: GraphSelectProps) => {
  return (
    <>
      {id === "graph1" && (
        <article className="Report__Graph">
          <h2>graph1</h2>
        </article>
      )}
      {id === "graph2" && (
        <article className="Report__Graph">
          <h2>graph2</h2>
        </article>
      )}
      {id === "graph3" && (
        <article className="Report__Graph">
          <h2>graph3</h2>
        </article>
      )}
      {id === "graph4" && (
        <article className="Report__Graph">
          <h2>graph4</h2>
        </article>
      )}
    </>
  );
};

export default Report_Graph;
