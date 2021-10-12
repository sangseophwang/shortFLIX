import React from "react";
import "./scss/MainVideo.scss";
import Background from "../Assets/Video/background.mp4";
import Logo from "../Assets/Image/shortFLIX.png";
import Button from "../Common/Button";
import { Link } from "react-router-dom";

export default function MainVideo() {
  return (
    <article className="MainVideo__Container">
      <section className="MainVideo__Title">
        <img src={Logo} alt="shortFLIX LOGO" />
        <h1>,for your busy life</h1>
        <Link to="/test">
          <Button styles="btn-sm btn-red">Get Started</Button>
        </Link>
      </section>

      <video autoPlay muted loop playsInline>
        <source src={Background} type="video/mp4" />
      </video>
    </article>
  );
}
