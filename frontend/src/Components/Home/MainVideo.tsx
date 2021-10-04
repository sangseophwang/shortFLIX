import React from "react";
import "./scss/MainVideo.scss";
import Background from "../Common/Video/background.mp4";
import Logo from "../Common/Image/shortFLIX.png";
import { Link } from "react-router-dom";

export default function MainVideo() {
  return (
    <div className="MainVideo__Container">
      <div className="MainVideo__Title">
        <img src={Logo} alt="shortFLIX LOGO" />
        <h1>,for your busy life</h1>
        <Link to="/inspect">
          <button>Get Started</button>
        </Link>
      </div>

      <video muted autoPlay loop playsInline>
        <source src={Background} type="video/mp4" />
      </video>
    </div>
  );
}
