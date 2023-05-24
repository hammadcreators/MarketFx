import { useEffect, useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import styled from "styled-components";

const StyledDiv = styled.div`
  border-bottom: 1px solid #eeeff0;
  // display: flex;
  // justify-content: space-around;
  padding: 13px;
  align-items: center;
  cursor: pointer;
  min-height: max-content;
`;

const StyledCur = styled.span`
  font-weight: bold;
`;

const StyledTime = styled.span`
  color: #3b4859;
  opacity: 0.7;
`;
const CalenderSidebar = ({ calender }) => {
  console.log(calender);
  const [country, setCountry] = useState("");
  const [countryImg, setCountryImg] = useState("");
  //   useEffect(() => {
  //     fetch("https://openexchangerates.org/api/currencies.json")
  //       .then((res) => res.json())
  //       .then((country) => {
  //         // console.log(country[details.cur].split(" ")[0]);
  //         setCountry(country[details.cur].split(" ")[0]);

  //         // Now et the flag field
  //       })
  //       .catch((err) => {
  //         alert("Couldnt fetch country: " + err.message);
  //         // console.log(err);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     console.log(country);
  //     fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         // alert("Couldnt fetch country image: " + err.message);
  //         console.log(err);
  //       });
  //   }, [country]);

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
    <StyledDiv>
      <div className="row align-items-center">
        <div className="col-6">
          <StyledTime>{calender.time}</StyledTime>
        </div>
        <div className="col-6">
          <StyledCur>{calender.cur}</StyledCur>
        </div>
      </div>
    </StyledDiv>
  );
};
export default CalenderSidebar;
