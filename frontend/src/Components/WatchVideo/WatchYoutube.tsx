import "./scss/WatchYoutube.scss";
import React, { useState } from "react";
import InfoText from "../Common/InfoText";
import heart_fill from "../Assets/Image/heart_fill.svg";
import heart_outline from "../Assets/Image/heart_outline.svg";
import Disqus from "disqus-react";
import AzureAxios from "../API/Azure_Api";

export default function WatchYoutube({
  videoDetail,
  setPage,
  link,
  like,
  setLikes,
}: any) {
  const [isLike, setIsLike] = useState(like);
  const handleLike = () => {
    if (isLike) {
      AzureAxios.post(`/dislike/${videoDetail.id}`, {
        email: sessionStorage.getItem("email"),
      })
        .then((res) => {
          if (res.status === 200) setLikes(videoDetail.like - 1);
        })
        .catch((err: any) => alert("다시 시도해주세요 ㅜㅜ"));
    } else {
      AzureAxios.post(`/like/${videoDetail.id}`, {
        email: sessionStorage.getItem("email"),
      })
        .then((res) => {
          if (res.status === 200) setLikes(videoDetail.like + 1);
        })
        .catch((err: any) => alert("다시 시도해주세요 ㅜㅜ"));
    }
    setIsLike(!isLike);
  };
  const disqusShortname = "short-flix";
  const disqusConfig = {
    url: `http://localhost:3000/watchvideo/${videoDetail.id}`,
    identifier: videoDetail.title,
    title: videoDetail.title,
  };

  return (
    <div id="WatchYoutube">
      <div className="topBox">
        <div className="infoTextBox" onClick={() => setPage("desc")}>
          <InfoText>{videoDetail.title}</InfoText>
        </div>
        {isLike ? (
          <img src={heart_fill} onClick={handleLike} alt="하트 채워진 이미지" />
        ) : (
          <img src={heart_outline} onClick={handleLike} alt="빈 하트 이미지" />
        )}
        {/* TODO: state 작동되게 작업 */}
      </div>
      <div className="youtubeFrame">
        <iframe
          width="100%"
          height="600"
          src={`https://www.youtube.com/embed/${link}?autoplay=1&mute=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="disqusFrame">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </div>
  );
}
