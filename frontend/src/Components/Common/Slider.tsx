import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Common/scss/Slider_Item.scss";
import Button from "./Button";

interface LengthProps {
  number: number;
  data: any;
}

function LikeSlider(props: LengthProps) {
  const settings = {
    infinite: true,
    slidesToShow: props.number && props.number < 7 ? props.number : 7,
    swipeToSlide: true,
  };
  return (
    <div className="Slider">
      <Slider {...settings}>
        {props.data &&
          props.data.map((data: any, index: number) => {
            return (
              <div className="Slider_Item" key={index}>
                <img src={data.thumbnail} alt="thumbnail" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default LikeSlider;
