import React from "react";
import "./scss/MainVideo.scss";
import background from "../Common/Video/background.mp4";
import Logo from "../Common/Image/shortFLIX.png";

export default function MainVideo() {
  const history = useHistory();
  return (
    <div>
      <div className="title">
        <img src={Logo} alt="shortFLIX LOGO" />
        <h1>,for your busy life</h1>
        <button>Get Started</button>
      </div>

      <video muted autoPlay loop playsInline>
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
}
