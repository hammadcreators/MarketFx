import React, { useState, useEffect } from "react";
import axios from "axios";
import { MarketFxApi } from "../Api/MarketFxApi";
import socketIO from "socket.io-client";
import PairDataListItem from "../components/PairDataListItem";
import { Link } from "react-router-dom";

const DataPortal = () => {
  // const [prices, setPrices] = useState([]);
  const [datawindow, setDatawindow] = useState({});
  const [symbol, setSymbol] = useState("");
  // const testObj = {
  //   "1. From_Currency Code": "USD",
  //   "2. From_Currency Name": "United States Dollar",
  //   "3. To_Currency Code": "AUD",
  //   "4. To_Currency Name": "Australian Dollar",
  //   "5. Exchange Rate": "1.49327000",
  //   "6. Last Refreshed": "2023-03-20 12:38:01",
  //   "7. Time Zone": "UTC",
  //   "8. Bid Price": "1.49326600",
  //   "9. Ask Price": "1.49328000",
  // };
  useEffect(() => {
    const socket = socketIO.connect("http://localhost:5000");
    socket.on("datawindow", (data) => {
      const newObj = Object.assign(datawindow, data);
      console.log(newObj);
      setDatawindow({ ...data, ...datawindow });
    });
    // const fetchData = async () => {
    //   const response = await MarketFxApi.get("/dataportal/datawindow");
    //   console.log(response);
    // };
    // fetchData();
    // const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Real-time Forex Prices</h2>
      {datawindow &&
        Object.keys(datawindow).map((key) => (
          <Link
            to={`/dataportal/currencyGraph/${
              datawindow[key]["Realtime Currency Exchange Rate"][
                "3. To_Currency Code"
              ] +
              datawindow[key]["Realtime Currency Exchange Rate"][
                "1. From_Currency Code"
              ]
            }`}
          >
            <PairDataListItem
              dataportal={datawindow[key]["Realtime Currency Exchange Rate"]}
            />
          </Link>
        ))}
    </div>
  );
};

export default DataPortal;
