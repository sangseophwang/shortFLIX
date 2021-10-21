import "./scss/ResultContent.scss";
import React, { useEffect, useState } from "react";
import InfoText from "../Common/InfoText";
import MovieItem from "./MovieItem";
import Button from "../Common/Button";
import { useHistory, useLocation } from "react-router";
import AzureAxios from "../API/Azure_Api";

export default function ResultContent() {
  const history = useHistory();
  const location: any = useLocation();
  const [whole, setWhole] = useState([]);
  const [data, setData] = useState([]);
  const userName = sessionStorage.getItem("username") || "익명";

  const handleRedo = () => {
    history.push("/test");
  };
  useEffect(() => {
    if (location.state) {
      setData(location.state.part.slice(0, 8));
      setWhole(location.state.whole);
    } else {
      AzureAxios.post("/filter", {
        email: sessionStorage.getItem("email"),
      })
        .then((res: any) => {
          setWhole(res.data.data);
          return res.data.data;
        })
        .then((res: any) => res.slice(0, 8))
        .then((res: any) => {
          setData(res);
        });
    }
  }, []);

  const handleRecommendation = () => {
    const lastDataId = data[7]["id"];
    const prevIndex = whole.findIndex((i: any) => i["id"] === lastDataId);
    if (prevIndex + 9 <= whole.length) {
      setData(whole.slice(prevIndex + 1, prevIndex + 9));
    } else {
      setData(whole.slice(0, 8));
    }
  };
  return (
    <div id="ResultContent">
      <div className="resultDesc">
        <InfoText>{userName}님을 위한 컨텐츠 제안</InfoText>
        <p>클릭해서 리뷰를 확인해보세요.</p>
      </div>
      <div className="movieList">
        {data &&
          data.map((item: any) => (
            <MovieItem
              image={item.thumbnail}
              key={item.id}
              title={item.title}
              percent={item.similarity || 0}
              onClick={() =>
                history.push({
                  pathname: `/watchvideo/${item.id}`,
                  state: {
                    cur: item,
                    part: data,
                    whole: whole,
                  },
                })
              }
            />
          ))}
      </div>
      <div className="buttonList">
        <Button styles="btn-sm" onClick={handleRedo}>
          설문 다시하기
        </Button>
        <Button styles="btn-sm btn-red" onClick={handleRecommendation}>
          다른 작품 추천 받기
        </Button>
      </div>
    </div>
  );
}
