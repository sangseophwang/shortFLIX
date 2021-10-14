import React from "react";
import "./scss/Report_Chart.scss";

type ChartSelectProps = {
  id: string;
};

const Report_Chart = ({ id }: ChartSelectProps) => {
  return (
    <>
      {id === "chart1" && (
        <article className="Report__Chart">
          <table>
            <th align="center" colSpan={5}>
              OTT 서비스 이용경험
            </th>
            <tr>
              <td align="center">연령</td>
              <td align="center">19년</td>
              <td align="center">20년</td>
            </tr>
            <tr>
              <td align="center">10대</td>
              <td align="center">184</td>
              <td align="center">149</td>
            </tr>
            <tr>
              <td align="center">20대</td>
              <td align="center">345</td>
              <td align="center">422</td>
            </tr>
            <tr>
              <td align="center">30대</td>
              <td align="center">484</td>
              <td align="center">564</td>
            </tr>
            <tr>
              <td align="center">40대</td>
              <td align="center">516</td>
              <td align="center">634</td>
            </tr>
            <tr>
              <td align="center">50대</td>
              <td align="center">403</td>
              <td align="center">643</td>
            </tr>
            <tr>
              <td align="center">60대 이상</td>
              <td align="center">272</td>
              <td align="center">583</td>
            </tr>
          </table>
        </article>
      )}
      {id === "chart2" && (
        <article className="Report__Chart">
          <table>
            <th align="center" colSpan={5}>
              OTT 서비스 종류별 이용현황
            </th>
            <tr>
              <td></td>
              <td colSpan={2} align="center">
                19년
              </td>
              <td colSpan={2} align="center">
                20년
              </td>
            </tr>
            <tr>
              <td align="center">연령</td>
              <td align="center">유튜브</td>
              <td align="center">넷플릭스</td>
              <td align="center">유튜브</td>
              <td align="center">넷플릭스</td>
            </tr>
            <tr>
              <td align="center">10대</td>
              <td align="center">65</td>
              <td align="center">1</td>
              <td align="center">76</td>
              <td align="center">2</td>
            </tr>
            <tr>
              <td align="center">20대</td>
              <td align="center">133</td>
              <td align="center">3</td>
              <td align="center">208</td>
              <td align="center">6</td>
            </tr>
            <tr>
              <td align="center">30대</td>
              <td align="center">286</td>
              <td align="center">7</td>
              <td align="center">367</td>
              <td align="center">18</td>
            </tr>
            <tr>
              <td align="center">40대</td>
              <td align="center">353</td>
              <td align="center">9</td>
              <td align="center">478</td>
              <td align="center">22</td>
            </tr>
            <tr>
              <td align="center">50대</td>
              <td align="center">335</td>
              <td align="center">4</td>
              <td align="center">565</td>
              <td align="center">14</td>
            </tr>
            <tr>
              <td align="center">60대 이상</td>
              <td align="center">231</td>
              <td align="center">1</td>
              <td align="center">538</td>
              <td align="center">9</td>
            </tr>
            <tr>
              <td align="center">전체</td>
              <td align="center">1403</td>
              <td align="center">25</td>
              <td align="center">2232</td>
              <td align="center">71</td>
            </tr>
          </table>
        </article>
      )}
      {id === "chart3" && (
        <article className="Report__Chart">
          <table>
            <th align="center" colSpan={2}>
              OTT 서비스 이용빈도별 1회 평균 이용시간
            </th>
            <tr>
              <td align="center">빈도</td>
              <td align="center">1회 평균 이용시간 (분)</td>
            </tr>
            <tr>
              <td align="center">하루에도 여러번</td>
              <td align="center">24</td>
            </tr>
            <tr>
              <td align="center">하루 1번</td>
              <td align="center">25</td>
            </tr>
            <tr>
              <td align="center">1주일에 5-6회</td>
              <td align="center">25</td>
            </tr>
            <tr>
              <td align="center">1주일에 3-4회</td>
              <td align="center">23</td>
            </tr>
            <tr>
              <td align="center">1주일에 1-2회</td>
              <td align="center">24</td>
            </tr>
            <tr>
              <td align="center">월 1-3회</td>
              <td align="center">21</td>
            </tr>
            <tr>
              <td align="center">월 1회 미만</td>
              <td align="center">16</td>
            </tr>
            <tr>
              <td align="center">분기/연간 1회</td>
              <td align="center">20</td>
            </tr>
          </table>
        </article>
      )}
      {id === "chart4" && (
        <article className="Report__Chart">
          <table>
            <th align="center" colSpan={2}>
              연령대별 OTT서비스 1회 평균 이용시간
            </th>
            <tr>
              <td align="center">연령</td>
              <td align="center">1회 평균 이용시간 (분)</td>
            </tr>
            <tr>
              <td align="center">10세 미만</td>
              <td align="center">24</td>
            </tr>
            <tr>
              <td align="center">10대</td>
              <td align="center">25</td>
            </tr>
            <tr>
              <td align="center">20대</td>
              <td align="center">26</td>
            </tr>
            <tr>
              <td align="center">30대</td>
              <td align="center">25</td>
            </tr>
            <tr>
              <td align="center">40대</td>
              <td align="center">24</td>
            </tr>
            <tr>
              <td align="center">50대</td>
              <td align="center">22</td>
            </tr>
            <tr>
              <td align="center">60대 이상</td>
              <td align="center">20</td>
            </tr>
          </table>
        </article>
      )}
    </>
  );
};

export default Report_Chart;
