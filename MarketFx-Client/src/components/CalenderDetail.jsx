import { FaAngleDown, FaSearch } from "react-icons/fa";
import styled from "styled-components";

// {/* Economic Calender */}

const EconomicCalenderContainer = styled.div`
  height: 300px;
  position: static;
`;

const EconomicCalenderItem = styled.div`
  border-bottom: 1px solid #eeeff0;
  display: flex;
  justify-content: space-around;
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
  flex: 2;
  padding-left: 7px;
`;

const EconomicCalenderActualData = styled.div`
  font-weight: 700;
  font-size: 12px;
  flex: 1;
`;

const EconomicCalenderPreviousData = styled.div`
  font-weight: 700;
  font-size: 12px;
  flex: 1;
`;

const NormalWeight = styled.span`
  font-weight: normal;
`;

const CalenderDetail = () => {
  
  return (
    
            
      <EconomicCalenderContainer>
              <h4>Economic Calender</h4>
              {/* This will have the border */}

              <EconomicCalenderItem>
                {/* ?Impact */}
                <EconomicCalenderImpact>
                  <span> LOW </span>
                </EconomicCalenderImpact>

                {/* Tilte */}
                <EconomicCalenderTitle>
                  <span>
                    Wholesale Prices MoM <NormalWeight>(FEB)</NormalWeight>{" "}
                  </span>
                </EconomicCalenderTitle>
                {/* Actual Data */}
                <EconomicCalenderActualData>
                  <NormalWeight>Actual: </NormalWeight> <br />
                  <span>0.1%</span>
                </EconomicCalenderActualData>

                {/* Previous Data */}
                <EconomicCalenderPreviousData>
                  <NormalWeight>Previous: </NormalWeight> <br />
                  <span>0.1%</span>
                </EconomicCalenderPreviousData>

                <FaAngleDown />
              </EconomicCalenderItem>
              {/* This will have the border */}

              <EconomicCalenderItem>
                {/* ?Impact */}
                <EconomicCalenderImpact>
                  <span> LOW </span>
                </EconomicCalenderImpact>

                {/* Tilte */}
                <EconomicCalenderTitle>
                  <span>
                    Wholesale Prices YoY <NormalWeight>(FEB)</NormalWeight>{" "}
                  </span>
                </EconomicCalenderTitle>
                {/* Actual Data */}
                <EconomicCalenderActualData>
                  <NormalWeight>Actual: </NormalWeight> <br />
                  <span>8.9%</span>
                </EconomicCalenderActualData>

                {/* Previous Data */}
                <EconomicCalenderPreviousData>
                  <NormalWeight>Previous: </NormalWeight> <br />
                  <span>10.6%</span>
                </EconomicCalenderPreviousData>

                <FaAngleDown />
              </EconomicCalenderItem>

              {/* This will have the border */}

              <EconomicCalenderItem>
                {/* ?Impact */}
                <EconomicCalenderImpact>
                  <span> LOW </span>
                </EconomicCalenderImpact>

                {/* Tilte */}
                <EconomicCalenderTitle>
                  <span>
                    CPIF MoM <NormalWeight>(FEB)</NormalWeight>{" "}
                  </span>
                </EconomicCalenderTitle>
                {/* Actual Data */}
                <EconomicCalenderActualData>
                  <NormalWeight>Actual: </NormalWeight> <br />
                  <span>0.9%</span>
                </EconomicCalenderActualData>

                {/* Previous Data */}
                <EconomicCalenderPreviousData>
                  <NormalWeight>Previous: </NormalWeight> <br />
                  <span>-1.3%</span>
                </EconomicCalenderPreviousData>

                <FaAngleDown />
              </EconomicCalenderItem>

              {/* This will have the border */}

              <EconomicCalenderItem>
                {/* ?Impact */}
                <EconomicCalenderImpact>
                  <span> LOW </span>
                </EconomicCalenderImpact>

                {/* Tilte */}
                <EconomicCalenderTitle>
                  <span>
                    Wholesale Prices MoM <NormalWeight>(FEB)</NormalWeight>{" "}
                  </span>
                </EconomicCalenderTitle>
                {/* Actual Data */}
                <EconomicCalenderActualData>
                  <NormalWeight>Actual: </NormalWeight> <br />
                  <span>0.1%</span>
                </EconomicCalenderActualData>

                {/* Previous Data */}
                <EconomicCalenderPreviousData>
                  <NormalWeight>Previous: </NormalWeight> <br />
                  <span>0.1%</span>
                </EconomicCalenderPreviousData>

                <FaAngleDown />
              </EconomicCalenderItem>
              {/* This will have the border */}

              <EconomicCalenderItem>
                {/* ?Impact */}
                <EconomicCalenderImpact>
                  <span> LOW </span>
                </EconomicCalenderImpact>

                {/* Tilte */}
                <EconomicCalenderTitle>
                  <span>
                    Wholesale Prices MoM <NormalWeight>(FEB)</NormalWeight>{" "}
                  </span>
                </EconomicCalenderTitle>
                {/* Actual Data */}
                <EconomicCalenderActualData>
                  <NormalWeight>Actual: </NormalWeight> <br />
                  <span>0.1%</span>
                </EconomicCalenderActualData>

                {/* Previous Data */}
                <EconomicCalenderPreviousData>
                  <NormalWeight>Previous: </NormalWeight> <br />
                  <span>0.1%</span>
                </EconomicCalenderPreviousData>

                <FaAngleDown />
              </EconomicCalenderItem>
            </EconomicCalenderContainer>
      

      
    
  );
};
export default CalenderDetail;
