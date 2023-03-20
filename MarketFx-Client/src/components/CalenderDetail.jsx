import { useEffect } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import styled from "styled-components";

import { MarketFxApi } from "../Api/MarketFxApi";
// {/* Economic Calender */}

const EconomicCalenderContainer = styled.div`
  // height: 300px;
  position: static;
`;

const EconomicCalenderItem = styled.div`
  border-bottom: 1px solid #eeeff0;
  // display: flex;
  // justify-content: space-around;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  transition: all 0.8s ease;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

const EconomicCalenderImpact = styled.div`
  background-color: ${(props) =>
    props.impact === "Low"
      ? "#82bbe7"
      : props.impact === "Medium"
      ? "#f37821"
      : "#d0021b"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  padding: 5px;
  height: max-content;
  font-size: 12px;
  flex: 1;
  width: max-content !important;
`;

const EconomicCalenderTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  // flex: 1;
  padding-left: 7px;
`;

const EconomicCalenderActualData = styled.div`
  font-weight: 700;
  font-size: 12px;
  // flex: 1;
`;

const EconomicCalenderPreviousData = styled.div`
  font-weight: 700;
  font-size: 12px;
  // flex: 1;
`;

const NormalWeight = styled.span`
  font-weight: normal;
`;

const CalenderDetail = ({ calender }) => {
  console.log(calender);

  const details = {
    date: calender[0],
    time: calender[1],
    cur: calender[2],
    impact: () => {
      if (calender[3] === "bull1") return "Low";
      if (calender[3] === "bull2") return "Medium";
      if (calender[3] === "bull3") return "High";
    },
    event: calender[4],
    actual: calender[5],
    forcast: calender[6],
    previous: calender[7],
  };
  return (
    <EconomicCalenderContainer>
      {/* This will have the border */}

      <EconomicCalenderItem className="row align-items-center">
        {/* ?Impact */}
        <EconomicCalenderImpact impact={details.impact()} className="col-1">
          <span> {details.impact()} </span>
        </EconomicCalenderImpact>

        {/* Tilte */}
        <EconomicCalenderTitle className="col-5">
          <span>
            {details.event} <NormalWeight>(FEB)</NormalWeight>{" "}
          </span>
        </EconomicCalenderTitle>
        {/* Actual Data */}
        <EconomicCalenderActualData className="col-2">
          <NormalWeight>Actual: </NormalWeight> <br />
          <span>{details.actual}</span>
        </EconomicCalenderActualData>

        {/* Previous Data */}
        <EconomicCalenderPreviousData className="col-2">
          <NormalWeight>Previous: </NormalWeight> <br />
          <span>{details.previous}</span>
        </EconomicCalenderPreviousData>

        <div className="col-1">
          <FaAngleDown />
        </div>
      </EconomicCalenderItem>
    </EconomicCalenderContainer>
  );
};
export default CalenderDetail;
