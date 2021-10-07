import React from "react";
import Navigation from "../Components/Common/Navigation";
import MainVideo from "../Components/Home/MainVideo";
import Summary from "../Components/Home/Summary";
import Bottom from "../Components/Home/Summary_Bottom";
import Footer from "../Components/Common/Footer";
import "./scss/Home.scss";

const Home = () => {
  return (
    <main className="Home__Container">
      <Navigation link={"mypage"} />
      <MainVideo />
      <Summary />
      <Bottom />
      <Footer />
    </main>
  );
};

export default Home;
