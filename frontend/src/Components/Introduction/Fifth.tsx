import React from "react";
import "./scss/Fifth.scss";
import Logo from "../Assets/Image/shortFLIX.png";
import Button from "../Common/Button";
import { Link } from "react-router-dom";

export default function Fifth() {
  return (
    <article className="Fifth__Container">
      <section className="Fifth__Contents">
        <img className="Fifth__Image" src={Logo} alt="Logo" />
        <p>지금 시작합니다!</p>
        <Link to="/test">
          <Button styles="btn-sm btn-red">Get Started</Button>
        </Link>
      </section>
    </article>
  );
}
