import "./scss/Loading.scss";
import Spinner from "../Assets/Image/Spinner.svg";
import React from "react";
import InfoText from "../Common/InfoText";

export default function Loading() {
  return (
    <div id="Loading">
      <InfoText>이제 거의 다 완료되었습니다.</InfoText>
      <img src={Spinner} />
    </div>
  );
}
