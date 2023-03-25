// TradingViewWidget.jsx

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function GoldAnalysis() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_0b3c5") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: 980,
          height: 610,
          symbol: "FOREXCOM:XAUUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          save_image: false,
          details: true,
          container_id: "tradingview_0b3c5",
        });
      }
    }
  }, []);

  return (
    <>
      <h2>Gold Spot / US Dollar</h2>
      <div className="tradingview-widget-container">
        <div id="tradingview_0b3c5" />
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/symbols/XAUUSD/?exchange=FOREXCOM"
            rel="noopener"
            target="_blank"
          ></a>{" "}
        </div>
      </div>
    </>
  );
}
