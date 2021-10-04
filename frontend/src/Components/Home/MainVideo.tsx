import React from "react";
import "./scss/MainVideo.scss";
import Background from "../Common/Video/background.mp4";
import Logo from "../Common/Image/shortFLIX.png";
import { Link } from "react-router-dom";

export default function MainVideo() {
  return (
    <article className="MainVideo__Container">
      <section className="MainVideo__Title">
        <img src={Logo} alt="shortFLIX LOGO" />
        <h1>,for your busy life</h1>
        <Link to="/test">
          <button>Get Started</button>
        </Link>
      </section>

      <video muted autoPlay loop playsInline>
        <source src={Background} type="video/mp4" />
      </video>
    </article>
  );
}
