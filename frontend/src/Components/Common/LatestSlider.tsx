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

function LatestSlider(props: LengthProps) {
  const [width, setWidth] = useState("");
  const LinkURL = `https://www.youtube.com/watch?v=${props.data}`;
  useEffect(() => {
    if (props.number && props.number < 7) {
      setWidth(`${props.number * 200}px`);
    } else {
      setWidth("1400px");
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
                <a href={LinkURL}>
                  <img
                    className="Latest__Image"
                    src={`https://i.ytimg.com/vi/${data}/mqdefault.jpg`}
                    alt=""
                  />
                </a>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default LatestSlider;
