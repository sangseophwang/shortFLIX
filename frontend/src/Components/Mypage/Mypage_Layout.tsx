import React, { useState, useEffect } from "react";
import "./scss/Mypage_Layout.scss";
import Navigation from "../Common/Navigation";
import Button from "../Common/Button";
import Slider from "../Common/Slider";
import { useHistory } from "react-router";
import axios from "axios";

const username = sessionStorage.getItem("username");
const URL = "http://kdt-vm-0202003.koreacentral.cloudapp.azure.com:5000";

interface UserData {
  likes_list: any;
  latest_reviews_list: any;
  preferences: any;
}

const Mypage_Layout = () => {
  const [likeLength, setLikeLength] = useState<any>();
  const [latestLength, setLatestLength] = useState<any>();
  const [preferencesLength, setPreferencesLength] = useState<any>();
  const [likeData, setLikeData] = useState<any>();
  const [latestData, setLatestData] = useState<any>();
  const [preferencesData, setPreferencesData] = useState<any>();
  const history = useHistory();
  const onLogoutHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    axios.get(URL + "/logout").then((response) => {
      console.log(response.data);
      sessionStorage.removeItem("username");
      history.push("/");
    });
  };
  useEffect(() => {
    axios
      .post<UserData>(URL + "/mypage", {
        email: sessionStorage.getItem("email"),
      })
      .then((response) => {
        console.log(response.data);
        setLikeLength(response.data.likes_list.length);
        // setLatestLength(response.data.latest_reviews_list.length);
        // setPreferencesLength(response.data.preferences.length);
        // setLatestData(response.data.latest_reviews_list);
        // setPreferencesData(response.data.preferences);
        setLikeData(response.data.likes_list);
        console.log(response.data);
      });
  }, []);
  return (
    <article className="Mypage__Container">
      <Navigation />
      <div className="Mypage__Grid">
        <div className="Mypage__Header">
          <section className="Mypage__Title">
            <h1>{username}님의 페이지</h1>
          </section>
          <button onClick={onLogoutHandler}>로그아웃</button>
        </div>
        <section className="Mypage__Taste">
          <div>{username}님의 취향</div>
          <Button styles="btn-sm">호러</Button>
          <Button styles="btn-sm">로맨스</Button>
          <Button styles="btn-sm">액션</Button>
        </section>
        <section className="Mypage__LikedList">
          <div>{username}님이 좋아한 목록</div>
          <Slider number={likeLength} data={likeData} />
        </section>
        <section className="Mypage__Recent">
          <div>최근에 본 리뷰 영상</div>
          <Slider number={latestLength} data={latestData} />
        </section>
      </div>
    </article>
  );
};

export default Mypage_Layout;
