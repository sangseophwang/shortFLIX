import React from "react";
import MainVideo from "../Components/Home/MainVideo";
import "./scss/Home.scss";
import Navigation from "../Components/Common/Navigation";

const Home = () => {
  return (
    <div id="HomeContainer">
      <Navigation link='login' />
      {/* TODO: 유저 로그인시 버튼 다른 걸로 바꿔보여주기 */}
      <MainVideo />
    </div>
  );
};

export default Home;
