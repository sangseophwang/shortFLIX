import React from "react";
import "./scss/Footer.scss";
import Logo from "../Common/Image/shortFLIX.png";

export default function Footer() {
  return (
    <footer className="Footer__Container">
      <img src={Logo} alt="Footer Logo" />
      <p>for your busy life, for your better life.</p>
      <p>© Copyright 2021. shortFLIX All rights reserved.</p>
    </footer>
  );
}
