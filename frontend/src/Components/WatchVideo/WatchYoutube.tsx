import "./scss/WatchYoutube.scss";
import React from "react";
import InfoText from "../Common/InfoText";
import heart_fill from "../Assets/Image/heart_fill.png";

export default function WatchYoutube({ videoDetail, setPage }: any) {
  return (
    <div id="WatchYoutube">
      <div className="topBox">
        <div className="infoTextBox" onClick={() => setPage("desc")}>
          <InfoText>{videoDetail.title}</InfoText>
        </div>
        <img src={heart_fill} alt="하트 이미지" />
        {/* TODO: state 작동되게 작업 */}
      </div>
      <div className="youtubeFrame">영상은 여기에</div>
      <div className="disqusFrame">disqus는 여기에</div>
    </div>
  );
}
