import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Common/scss/Slider_Item.scss";
import Button from "./Button";

interface LengthProps {
  number: number;
  data: any;
}

function RecentSlider(props: LengthProps) {
  const [width, setWidth] = useState("");
  useEffect(() => {
    if (props.number && props.number < 7) {
      setWidth(`${props.number * 150}px`);
    } else {
      setWidth("1200px");
    }
  }, [props.number]);
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
                <Button styles="btn-sm">{data}</Button>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default RecentSlider;
