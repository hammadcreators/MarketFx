import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import TradingViewWidget, {
  Themes,
  TechnicalAnalysisWidget,
  FundamentalAnalysisWidget,
} from "react-tradingview-widget";
import styled from "styled-components";

const Form = styled.form`
  text-align: right;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: 700;
  margin-right: 10px;
  text-transform: uppercase;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 10px;
`;

const CurrencyGraph = () => {
  const { passedSymbol } = useParams();
  const [symbol, setSymbol] = useState("FX:EURUSD");
  const chartRef = useRef(null);

  useEffect(() => {
    setSymbol("FX:" + passedSymbol);
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      chartRef.current &&
        chartRef.current.update().catch((error) => console.log(error));
    }, 100000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  return (
    <div>
      <h1>Real-Time Forex Data</h1>
      <Form>
        <Label htmlFor="symbol">Symbol: </Label>
        <Select id="symbol" value={symbol} onChange={handleSymbolChange}>
          <option value="FX:EURUSD">EUR/USD</option>
          <option value="FX:GBPUSD">GBP/USD</option>
          <option value="FX:USDJPY">USD/JPY</option>
          <option value="FX:USDCHF">USD/CHF</option>
        </Select>
      </Form>
      <TradingViewWidget
        symbol={symbol}
        interval="1"
        theme={Themes.Light}
        width="100%"
        height="500"
        ref={chartRef}
      />
      {/* <TechnicalAnalysisWidget
        symbol={symbol}
        interval="1"
        width="100%"
        height="500"
      />
      <FundamentalAnalysisWidget symbol={symbol} width="100%" height="500" /> */}
    </div>
  );
};

export default CurrencyGraph;
