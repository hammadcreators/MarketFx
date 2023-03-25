// TradingViewWidget.jsx

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function OilAnalysis() {
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
        document.getElementById("tradingview_b6c65") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: 980,
          height: 610,
          symbol: "CURRENCYCOM:OIL_CRUDE",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          details: true,
          calendar: true,
          container_id: "tradingview_b6c65",
        });
      }
    }
  }, []);

  return (
    <>
      <h2>Crude Oil</h2>
      <div className="tradingview-widget-container">
        <div id="tradingview_b6c65" />
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/symbols/OIL_CRUDE/?exchange=CURRENCYCOM"
            rel="noopener"
            target="_blank"
          ></a>{" "}
        </div>
      </div>
    </>
  );
}
