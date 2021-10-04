import React from "react";
import MainVideo from "../Components/Home/MainVideo";
import Summary from "../Components/Home/Summary";
import Bottom from "../Components/Home/Summary_Bottom";
import Footer from "../Components/Common/Footer";
import "./scss/Home.scss";

const Home = () => {
  return (
    <div className="HomeContainer">
      <MainVideo />
      <Summary />
      <Bottom />
      <Footer />
    </div>
  );
};

export default Home;
