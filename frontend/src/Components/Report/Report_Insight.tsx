import React from "react";
import "./scss/Report_Insight.scss";

type InsightSelectProps = {
  id: string;
};

const Report_Insight = ({ id }: InsightSelectProps) => {
  return (
    <>
      {id === "insight1" && (
        <article className="Report__Insight">
          <h3>인사이트</h3>
          <p>
            - 코로나가 시작된 2019년에 비해 2020년에 급격히 OTT 서비스 이용률이
            증가했다. 그 중에서도 유튜브와 넷플릭스는 각각 약{" "}
            <span>1.5배, 2.8배</span> 가량 증가했다.
          </p>
          <p>
            - 연령별 OTT 이용률 또한 전반적으로 상승한 모습을 보인다. 10대를
            제외하고 나머지 연령대에서는 상승한 모습을 보이며, 특히{" "}
            <span>50대 이상 연령대에서 큰 상승을 보였다</span>.
          </p>
          <p>
            - 연령별 이용률 차이가 있는 데에는 10대일수록 전통적인 OTT
            플랫폼에서 벗어나 틱톡 등{" "}
            <span>신규 플랫폼을 이용하는 비중이 늘어났다</span>고 추측할 수
            있으며, 반대로 50대 이상의 사용자는 코로나 이전까지는 많이 이용을
            하지 않다가{" "}
            <span>코로나 이후 집에 머무는 시간이 늘면서 급격히 증가한 것</span>
            으로 볼 수 있다.
          </p>
        </article>
      )}
      {id === "insight2" && (
        <article className="Report__Insight">
          <h3>인사이트</h3>
          <p>
            - OTT 서비스 이용빈도별, 연령대별 평균 이용 시간 모두{" "}
            <span>20-25분 사이</span>에 분포하는 것을 확인할 수 있다.
          </p>
          <p>
            - 특히 OTT 서비스 이용빈도별 평균 이용 시간 그래프에서는{" "}
            <span>
              {"'하루에도 여러번'"}부터 {"'1주일 5-6회'"}
            </span>{" "}
            이용하는 사용자를 자주 이용하는 사용자로 분류할 수 있는데, 이들 또한{" "}
            <span>평균 25분</span> 가량 사용한다는 결과가 나왔다.
          </p>
          <p>
            - 이 결과로 미루어봤을 떄 전반적으로 전 연령대에서 영상을 시청하는
            시간이 넷플릭스와 같은 플랫폼에서 제공하는 긴 시간의 드라마, 영화
            컨텐츠보다는 유튜브와 같이{" "}
            <span>짧은 시간동안 적당히 즐길 수 있는 컨텐츠를 선호</span>한다는
            것을 알 수 있다.
          </p>
        </article>
      )}
    </>
  );
};

export default Report_Insight;
