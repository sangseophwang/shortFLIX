import React from "react";
import "./scss/Report_Chart.scss";

const First_Chart1 = () => {
  return (
    <>
      <table>
        <th align="center" colSpan={5}>
          OTT 서비스 이용경험
        </th>
        <tr>
          <td></td>
          <td colSpan={2} align="center">
            20년
          </td>
          <td colSpan={2} align="center">
            19년
          </td>
        </tr>
        <tr>
          <td align="center">연령</td>
          <td align="center">이용경험 O</td>
          <td align="center">이용경험 X</td>
          <td align="center">이용경험 O</td>
          <td align="center">이용경험 x</td>
        </tr>
        <tr>
          <td align="center">10세 미만</td>
          <td align="center">95</td>
          <td align="center">48</td>
          <td align="center">43</td>
          <td align="center">171</td>
        </tr>
        <tr>
          <td align="center">10대</td>
          <td align="center">957</td>
          <td align="center">140</td>
          <td align="center">590</td>
          <td align="center">604</td>
        </tr>
        <tr>
          <td align="center">20대</td>
          <td align="center">1170</td>
          <td align="center">54</td>
          <td align="center">779</td>
          <td align="center">446</td>
        </tr>
        <tr>
          <td align="center">30대</td>
          <td align="center">838</td>
          <td align="center">65</td>
          <td align="center">643</td>
          <td align="center">385</td>
        </tr>
        <tr>
          <td align="center">40대</td>
          <td align="center">1543</td>
          <td align="center">281</td>
          <td align="center">910</td>
          <td align="center">1070</td>
        </tr>
        <tr>
          <td align="center">50대</td>
          <td align="center">1531</td>
          <td align="center">479</td>
          <td align="center">732</td>
          <td align="center">1375</td>
        </tr>
        <tr>
          <td align="center">60대 이상</td>
          <td align="center">2208</td>
          <td align="center">893</td>
          <td align="center">334</td>
          <td align="center">2782</td>
        </tr>
        <tr>
          <td align="center">전체</td>
          <td align="center">8342</td>
          <td align="center">1960</td>
          <td align="center">4031</td>
          <td align="center">6833</td>
        </tr>
      </table>
    </>
  );
};

export default First_Chart1;
