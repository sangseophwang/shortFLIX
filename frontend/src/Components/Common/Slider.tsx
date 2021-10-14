import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Common/scss/Slider_Item.scss";
import axios from "axios";

interface Userdata {
  email: string;
  likes_list: any;
  latest_reviews: any;
}

export type ThumbnailList = Userdata[];

function LikeSlider() {
  const [data, setData] = useState<ThumbnailList>();
  const [datalength, setDataLength] = useState<number>();
  const URL =
    "http://kdt-vm-0202003.koreacentral.cloudapp.azure.com:5000/mypage";
  useEffect(() => {
    axios
      .post<Userdata[]>(URL, {
        email: sessionStorage.getItem("email"),
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);
  console.log(data);
  useEffect(() => {
    const newLocal = data?.length;
    if (newLocal ? 7 : Number) {
      setDataLength(data?.length);
    }
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: datalength,
    swipeToSlide: true,
  };
  return (
    <div className="Slider">
      <Slider {...settings}></Slider>
    </div>
  );
}

export default LikeSlider;

{
  /*

  1. 연주님 측에서 데이터를 연결에 db에 쌓인다.
  2. 그 데이터를 연결해 데이터의 길이를 useState로 저장한다.
  3. useState로 저장한 값을 slidesToShow에 적용한다.
  4. 데이터는 map을 통해 포스터와 링크가 추가되도록 한다.
  5. 포스터는 a링크로 감싼다?
  6. 그리고 각각 좋아요 항목, 장르 항목, 최근에 본 항목 슬라이더로 만든다.
*/
}

// const items: itemsProps[] = [
//   {
//     item: "https://images.justwatch.com/poster/251207693/s592",
//     name: "이미지01",
//   },
//   {
//     item: "https://images.justwatch.com/poster/46536252/s592",
//     name: "이미지02",
//   },
//   {
//     item: "https://images.justwatch.com/poster/249479684/s592",
//     name: "이미지03",
//   },
//   {
//     item: "https://images.justwatch.com/poster/251527841/s592",
//     name: "이미지04",
//   },
//   {
//     item: "https://images.justwatch.com/poster/247789689/s592",
//     name: "이미지05",
//   },
//   {
//     item: "https://images.justwatch.com/poster/249944832/s592",
//     name: "이미지06",
//   },
//   {
//     item: "https://images.justwatch.com/poster/16883722/s592",
//     name: "이미지07",
//   },
//   {
//     item: "https://images.justwatch.com/poster/245382659/s592",
//     name: "이미지08",
//   },
//   {
//     item: "https://images.justwatch.com/poster/243632026/s592",
//     name: "이미지09",
//   },
// ];
