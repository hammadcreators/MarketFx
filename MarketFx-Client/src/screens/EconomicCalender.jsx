import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MarketFxApi } from "../Api/MarketFxApi";
import CalenderDetail from "../components/CalenderDetail";
import CalenderSidebar from "../components/CalenderSidebar";
import { TailSpin } from "react-loader-spinner";

const StyledButton = styled.button`
  padding: 10px;
  background: ${(props) => (props.active ? "#3b4859" : "none")};
  color: ${(props) => (props.active ? "white" : "#3b4859")};
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid #eee;
  margin-right: 10px;
  font-size: 10px;
  border-radius: 67px;
`;

const EconomicCalender = ({ sidebar }) => {
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  const [calender, setCalender] = useState([]);
  const [time, setTime] = useState("today");
  useEffect(() => {
    console.log("useEffect called");
    (async () => {
      try {
        const response = await MarketFxApi.get(
          "/calender/economicCalender/today"
        );
        setCalender(response.calender);
        // console.log(response.calender);
      } catch (ex) {}
    })();
  }, []);

  const fetchEconomicNews = async (time) => {
    try {
      const response = await MarketFxApi.get(
        `/calender/economicCalender/${time}`
      );
      setCalender(response.calender);
      // console.log(response.calender);
    } catch (ex) {}
  };
  return (
    <>
      <div className="row mb-3">
        <div className="offset-3 col-9">
          <StyledButton
            active={time === "yesterday" ? true : false}
            onClick={() => {
              setCalender([]);
              setTime("yesterday");
              fetchEconomicNews("yesterday");
            }}
          >
            Yesterday
          </StyledButton>
          <StyledButton
            active={time === "today" ? true : false}
            onClick={() => {
              setCalender([]);

              setTime("today");
              fetchEconomicNews("today");
            }}
          >
            Today
          </StyledButton>

          <StyledButton
            active={time === "tomorrow" ? true : false}
            onClick={() => {
              setCalender([]);

              setTime("tomorrow");
              fetchEconomicNews("tomorrow");
            }}
          >
            Tommorow
          </StyledButton>

          <StyledButton
            active={time === "thisweek" ? true : false}
            onClick={() => {
              setCalender([]);

              setTime("thisweek");
              fetchEconomicNews("thisweek");
            }}
          >
            This Week
          </StyledButton>

          <StyledButton
            active={time === "nextweek" ? true : false}
            onClick={() => {
              setCalender([]);

              setTime("nextweek");
              fetchEconomicNews("nextweek");
            }}
          >
            Next Week
          </StyledButton>
        </div>
      </div>
      {calender.length >= 1 ? (
        <div className="row">
          <div className="col-3 border">
            {calender
              ? calender.map((cal) => <CalenderSidebar calender={cal} />)
              : null}
          </div>
          <div className="col-9 border">
            {calender
              ? calender.map((cal) => <CalenderDetail calender={cal} />)
              : null}
          </div>
        </div>
      ) : (
        <div className="row align-items-center justify-content-center">
          <div className="col-2">
            <TailSpin
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EconomicCalender;
