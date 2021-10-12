import React, { useState } from "react";
import Navigation from "../Components/Common/Navigation";
import WatchVideoContent from "../Components/WatchVideo/WatchVideoContent";
import WatchYoutube from "../Components/WatchVideo/WatchYoutube";

const WatchVideo = ({ videoDetail }: any) => {
  type Page = "desc" | "youtube";
  const [page, setPage] = useState<Page>("desc");

  return (
    <main className="WatchVideo__Container">
      <Navigation />
      {page === "desc" && (
        <WatchVideoContent videoDetail={videoDetail} setPage={setPage} />
      )}
      {page === "youtube" && (
        <WatchYoutube videoDetail={videoDetail} setPage={setPage} />
      )}
    </main>
  );
};

export default WatchVideo;

WatchVideo.defaultProps = {
  videoDetail: {
    title: "오징어 게임",
    poster: "https://images.justwatch.com/poster/251207693/s592",
    synop:
      "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러. 빚에 쫓기는 수백 명의 사람들이 서바이벌 게임에 뛰어든다. 거액의 상금으로 새로운 삶을 시작하기 위해. 하지만 모두 승자가 될 순 없는 법, 탈락하는 이들은 치명적인 결과를 각오해야 한다.",
    runningTime: "54분",
    score: 8.3,
    genre: ["드라마", "액션", "스릴러"],
    hearts: 5,
    youtubes: [
      {
        id: 1,
        img: "",
        url: "1번째 영상 재생 예정",
        time: "10분",
      },
      {
        id: 2,
        img: "",
        url: "2번째 영상 재생 예정",
        time: "10분",
      },
      {
        id: 3,
        img: "",
        url: "3번째 영상 재생 예정",
        time: "10분",
      },
      {
        id: 4,
        img: "",
        url: "4번째 영상 재생 예정",
        time: "10분",
      },
      {
        id: 5,
        img: "",
        url: "5번째 영상 재생 예정",
        time: "10분",
      },
    ],
  },
};
