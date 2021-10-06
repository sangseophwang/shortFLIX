import React from "react";
import "./scss/Report_Chart.scss";

const Second_Chart1 = () => {
  return (
    <>
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
    </>
  );
};

export default Second_Chart1;
