import React from "react";
import "./scss/Report_Chart.scss";

const Second_Chart2 = () => {
  return (
    <>
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
    </>
  );
};

export default Second_Chart2;
