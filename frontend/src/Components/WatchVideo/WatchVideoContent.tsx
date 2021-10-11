import "./scss/WatchVideoContent.scss";
import React, { useState } from "react";
import arrow_right from "../Assets/Image/arrow_right.png";
import heart_fill from "../Assets/Image/heart_fill.png";
import full_star from "../Assets/Image/full_star.svg";
import half_star from "../Assets/Image/half_star.svg";
import empty_star from "../Assets/Image/empty_star.svg";
import chevron_big_left from "../Assets/Image/chevron_big_left.svg";
import chevron_big_right from "../Assets/Image/chevron_big_right.svg";
import YoutubeThumbnail from "./YoutubeThumbnail";
import { useHistory } from "react-router";
useHistory;

type WatchVideoContentProps = {
  videoDetail: any;
  setPage: any;
};

export default function WatchVideoContent({
  videoDetail,
  setPage,
}: WatchVideoContentProps) {
  const fullStarNum = parseInt(videoDetail.score) / 2;
  const isHalfStar = videoDetail % 1 >= 0.5 ? true : false;
  const [videoNum, setVideoNum] = useState(0);
  const history = useHistory();
  // TODO: 라우팅 구성(예. /watchvideo/{컨텐츠id}) 필요
  return (
    <div id="WatchVideoContent">
      <div className="backToList" onClick={() => history.push("/result")}>
        <img src={chevron_big_left} alt="arrow left image" />
        목록으로 돌아가기
      </div>
      <div className="videoDetail">
        <img
          src={videoDetail.poster}
          alt={`${videoDetail.title} 포스터`}
          className="videoPoster"
        />
        <div className="videoDesc">
          <div className="videoTitle">{videoDetail.title}</div>
          <p>장르: {videoDetail.genre.join(", ")}</p>
          <p>러닝타임: {videoDetail.runningTime}</p>
          <p>
            <span className="starRating">
              {[...Array(fullStarNum)].map((e, i) => (
                <img src={full_star} key={`star-${i}`} />
              ))}
              {isHalfStar ? <img src={half_star} /> : <img src={empty_star} />}
              {fullStarNum === 3 && <img src={empty_star} />}
            </span>
            {videoDetail.score}
          </p>
          <p>줄거리: {videoDetail.synop}</p>
          <div className="hearts">
            <img src={heart_fill} alt="좋아요 이미지" className="heartImg" />
            <span>{videoDetail.hearts}</span>
          </div>
        </div>
      </div>
      <div className="youtubeSection">
        <div className="reviewTitle">리뷰 영상</div>

        <div
          className="youtubeVideos"
          style={{ marginLeft: `-${412 * videoNum}px` }}
        >
          {videoDetail.youtubes.map((item: any) => (
            <YoutubeThumbnail
              key={item.id}
              time={item.time}
              image={item.img}
              url={item.url}
              onClick={() => setPage("youtube")}
            />
          ))}
        </div>
        {videoDetail.youtubes.length > 2 &&
          videoNum < videoDetail.youtubes.length - 2 && (
            <img
              className="arrow arrowRight"
              src={chevron_big_right}
              alt="arrow right"
              onClick={() => setVideoNum(videoNum + 1)}
            />
          )}
        {videoNum >= 1 && (
          <img
            className="arrow arrowLeft"
            src={chevron_big_left}
            alt="arrow left"
            onClick={() => setVideoNum(videoNum - 1)}
          />
        )}
      </div>
    </div>
  );
}
