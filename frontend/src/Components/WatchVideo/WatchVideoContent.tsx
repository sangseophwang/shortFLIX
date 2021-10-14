import "./scss/WatchVideoContent.scss";
import React, { useState, useEffect } from "react";
import arrow_right from "../Assets/Image/arrow_right.png";
import heart_fill from "../Assets/Image/heart_fill.svg";
import full_star from "../Assets/Image/full_star.svg";
import half_star from "../Assets/Image/half_star.svg";
import empty_star from "../Assets/Image/empty_star.svg";
import chevron_big_left from "../Assets/Image/chevron_big_left.svg";
import chevron_big_right from "../Assets/Image/chevron_big_right.svg";
import YoutubeThumbnail from "./YoutubeThumbnail";
import { useHistory } from "react-router";
useHistory;

import useYoutube from "./GetYoutube";

type WatchVideoContentProps = {
  videoDetail: any;
  setPage: any;
  setLink: any;
  videoAll: any;
};

export default function WatchVideoContent({
  videoDetail,
  setPage,
  setLink,
  videoAll
}: WatchVideoContentProps) {
  const fullStarNum = Math.floor(videoDetail.rating / 2);
  const isHalfStar = videoDetail.rating/2 % 1 >= 0.5 ? true : false;
  const [videoNum, setVideoNum] = useState(0);
  const history = useHistory();
  
  const youtubeInfo = videoDetail['youtubes'] ? videoDetail['youtubes'] : useYoutube(videoDetail.title)

  

  return (
    <div id="WatchVideoContent">
      <div className="backToList" onClick={() => {
        const temp = [...videoAll]
        if (youtubeInfo[0].link !== undefined) temp[videoDetail.id-1]['youtubes'] = youtubeInfo
        history.push({
          pathname: "/result",
          state: temp
        })
        }}>
        <img src={chevron_big_left} alt="arrow left image" />
        목록으로 돌아가기
      </div>
      <div className="videoDetail">
        <img
          src={videoDetail.thumbnail}
          alt={`${videoDetail.title} 포스터`}
          className="videoPoster"
        />
        <div className="videoDesc">
          <div className="videoTitle">{videoDetail.title}</div>
          <p>장르: {videoDetail.genre}</p>
          <p>러닝타임: {videoDetail.running_time}</p>
          <p>
            <span className="starRating">
              {Array.from({length: fullStarNum}).map((e, i) => (
                <img src={full_star} key={`star-${i}`} />
              ))}
              {isHalfStar ? <img src={half_star} /> : <img src={empty_star} />}
              {fullStarNum === 3 && <img src={empty_star} />}
            </span>
            {videoDetail.rating}
          </p>
          <div className='summary'>
            <div>
              줄거리: 
            </div>
            <div>
              {videoDetail.synop}
            </div>
            </div>
          <div className="hearts">
            <img src={heart_fill} alt="좋아요 이미지" className="heartImg" />
            <span>{videoDetail.hearts || 5}</span>
          </div>
        </div>
      </div>
      <div className="youtubeSection">
        <div className="reviewTitle">리뷰 영상</div>

        <div
          className="youtubeVideos"
          style={{ marginLeft: `-${412 * videoNum}px` }}
        >
          {youtubeInfo && youtubeInfo.map((item: any) => (item.link !== undefined && 
            <YoutubeThumbnail
              key={item.link}
              url={item.link}
              time={item.duration && getTime(item.duration)}
              onClick={() => {setPage("youtube"); setLink(item.link)}}
            />
          ))}
        </div>
        {videoNum < 3 && (
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


const getTime = (time:string) => {
  const beforeMin = time.split('M')[0].replace('PT','')+'분'
  if (beforeMin.includes('H')) {
    return beforeMin.replace('H', '시간 ')
  }
  if (beforeMin.includes('S')) return '1분 미만'
  return beforeMin
}