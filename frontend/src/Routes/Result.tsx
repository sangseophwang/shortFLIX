import React from "react";
import Navigation from "../Components/Common/Navigation";
import ResultContent from "../Components/Result/ResultContent";
const Result = () => {
  return (
    <main className='Result__Container'>
      <Navigation link={"mypage"} />
      <ResultContent />
    </main>
  );
};

export default Result;
