import React from "react";
import "./scss/MovieItem.scss";

type MovieITemProps = {
  image?: string;
  title: string;
  onClick: any;
  percent?: any;
};

export default function MovieItem({
  image,
  title,
  onClick,
  percent,
}: MovieITemProps) {
  const finalPercent = Math.round(percent * 100);

  return (
    <div className="movieItem" onClick={onClick}>
      <img src={image} />
      <div className="movieTitle">{title}</div>
      <div className="percentage">{finalPercent}% 일치</div>
    </div>
  );
}
