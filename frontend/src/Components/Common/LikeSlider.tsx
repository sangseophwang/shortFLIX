import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Common/scss/Slider_Item.scss";

interface LengthProps {
  number: number;
  data: any;
}

function LikeSlider(props: LengthProps) {
  const [width, setWidth] = useState("");
  useEffect(() => {
    if (props.number && props.number < 7) {
      setWidth(`${props.number * 130}px`);
    } else {
      setWidth("900px");
    }
  }, []);
  console.log(props.number * 130);
  const settings = {
    infinite: true,
    slidesToShow: props.number && props.number < 7 ? props.number : 7,
    swipeToSlide: true,
  };
  return (
    <div className="Slider" style={{ width: width }}>
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
