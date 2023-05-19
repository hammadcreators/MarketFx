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
  background-color: #82bbe7;
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

const PairDataListItem = ({ dataportal }) => {
  console.log(dataportal);

  return (
    <EconomicCalenderContainer>
      {/* This will have the border */}

      <EconomicCalenderItem className="row align-items-center">
        {/* ?Impact */}
        <EconomicCalenderImpact className="col-1">
          <span> {dataportal["5. Exchange Rate"]} </span>
        </EconomicCalenderImpact>

        {/* Tilte */}
        <EconomicCalenderTitle className="col-5">
          <span>
            {dataportal["3. To_Currency Code"]} /
            {dataportal["1. From_Currency Code"]}
            <NormalWeight>(FEB)</NormalWeight>
          </span>
        </EconomicCalenderTitle>
        {/* Actual Data */}
        <EconomicCalenderActualData className="col-2">
          <NormalWeight>Bid Price: </NormalWeight> <br />
          <span>{dataportal["8. Bid Price"]}</span>
        </EconomicCalenderActualData>

        {/* Previous Data */}
        <EconomicCalenderPreviousData className="col-2">
          <NormalWeight>Previous: </NormalWeight> <br />
          <span>{dataportal["9. Ask Price"]}</span>
        </EconomicCalenderPreviousData>

        <div className="col-1">
          <FaAngleDown />
        </div>
      </EconomicCalenderItem>
    </EconomicCalenderContainer>
  );
};
export default PairDataListItem;
