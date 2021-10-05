import React from "react";
import "./scss/Introduction.scss";
import First from "../Components/Introduction/First";
import Second from "../Components/Introduction/Second";
import Third from "../Components/Introduction/Third";
import Fourth from "../Components/Introduction/Fourth";
import Fifth from "../Components/Introduction/Fifth";
import BackToTop from "../Components/Common/BackToTop";

const Introduction = () => {
  return (
    <main className="Introduction__Container">
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <BackToTop />
    </main>
  );
};

export default Introduction;
