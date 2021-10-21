import React, { useState, useEffect } from "react";
import "./scss/Mypage_Layout.scss";
import Navigation from "../Common/Navigation";
import LikeSlider from "../Common/LikeSlider";
import TasteSlider from "../Common/TasteSlider";
import LatestSlider from "../Common/LatestSlider";
import { useHistory } from "react-router";
import AzureAxios from "../API/Azure_Api";

const username = sessionStorage.getItem("username");

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
    AzureAxios.get("/logout").then(() => {
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("email");
      history.push("/");
    });
  };
  useEffect(() => {
    AzureAxios.post<UserData>("/mypage", {
      email: sessionStorage.getItem("email"),
    }).then((response) => {
      {
        response.data.likes_list === null
          ? {}
          : setLikeData(response.data.likes_list);
      }
      {
        response.data.latest_reviews_list === null
          ? {}
          : setLatestData(
              JSON.parse(response.data.latest_reviews_list)["urls"]
            );
      }
      {
        response.data.preferences === null
          ? {}
          : setPreferencesData(response.data.preferences.genre);
      }
      {
        response.data.likes_list === null
          ? {}
          : setLikeLength(response.data.likes_list.length);
      }
      {
        response.data.latest_reviews_list === null
          ? {}
          : setLatestLength(
              JSON.parse(response.data.latest_reviews_list)["urls"].length
            );
      }
      {
        response.data.preferences === null
          ? {}
          : setPreferencesLength(response.data.preferences.genre.length);
      }
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
          {!preferencesLength && !likeLength && !latestLength ? (
            <div className="Mypage__Empty">
              현재 테스트를 진행하지 않아 비어있는 상태입니다 😢
            </div>
          ) : (
            <></>
          )}
        </div>
        <section className="Mypage__Taste">
          <div>{username}님의 취향</div>
          <TasteSlider number={preferencesLength} data={preferencesData} />
        </section>
        <section className="Mypage__LikedList">
          <div>{username}님이 좋아한 목록</div>
          <LikeSlider number={likeLength} data={likeData} />
        </section>
        <section className="Mypage__Recent">
          <div>최근에 본 리뷰 영상</div>
          <LatestSlider number={latestLength} data={latestData} />
        </section>
      </div>
    </article>
  );
};

export default Mypage_Layout;
