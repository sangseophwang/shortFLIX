import React from "react";
import "./scss/BackToTop.scss";

export default function BackToTop() {
  const scrollToTop = () => {
    const c: number = document.documentElement.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };
  return (
    <>
      <button className="Top" onClick={scrollToTop}>
        Top
      </button>
    </>
  );
}
