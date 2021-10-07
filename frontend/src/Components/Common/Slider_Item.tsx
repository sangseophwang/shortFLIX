import React from "react";
import Slick from "./Slider";
import "./scss/Slider_Item.scss";

interface itemsProps {
  item: string;
  name: string;
}

const items: itemsProps[] = [
  {
    item: "https://images.justwatch.com/poster/251207693/s592",
    name: "이미지01",
  },
  {
    item: "https://images.justwatch.com/poster/46536252/s592",
    name: "이미지02",
  },
  {
    item: "https://images.justwatch.com/poster/249479684/s592",
    name: "이미지03",
  },
  {
    item: "https://images.justwatch.com/poster/251527841/s592",
    name: "이미지04",
  },
  {
    item: "https://images.justwatch.com/poster/247789689/s592",
    name: "이미지05",
  },
  {
    item: "https://images.justwatch.com/poster/249944832/s592",
    name: "이미지06",
  },
  {
    item: "https://images.justwatch.com/poster/16883722/s592",
    name: "이미지07",
  },
  {
    item: "https://images.justwatch.com/poster/245382659/s592",
    name: "이미지08",
  },
  {
    item: "https://images.justwatch.com/poster/243632026/s592",
    name: "이미지09",
  },
];

function Slider_Item() {
  return (
    <Slick className="Slider">
      {items.map((item, index) => (
        <div className="SliderItem" key={index}>
          <img src={item.item} alt={item.name} />
        </div>
      ))}
    </Slick>
  );
}

export default Slider_Item;
