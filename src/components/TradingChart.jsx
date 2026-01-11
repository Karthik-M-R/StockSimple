import React, { useEffect, useRef, memo } from 'react';

function TradingChart({ stock }) {
  const container = useRef();

  useEffect(() => {
    // 1. Sanitize the symbol
    // "TATA MOTORS" -> "TATAMOTORS"
    const cleanSymbol = stock ? stock.replace(/\s/g, "").toUpperCase() : "NIFTY";
    
    
    const isIndex = cleanSymbol === "NIFTY" || cleanSymbol === "BANKNIFTY";
    const finalSymbol = isIndex ? `NSE:${cleanSymbol}` : `BSE:${cleanSymbol}`;

    // 2. Clear previous widget
    if (container.current) {
        container.current.innerHTML = ""; 
    }

    // 3. Create the script element
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    
    // 4. Widget Configuration
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": finalSymbol,
      "interval": "D",
      "timezone": "Asia/Kolkata",
      "theme": "light",
      "style": "1",
      "locale": "in",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "hide_top_toolbar": false,
      "hide_side_toolbar": false,
      "save_image": false,
      "calendar": false,
      "support_host": "https://www.tradingview.com"
    });

    container.current.appendChild(script);

  }, [stock]); 

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 h-[600px] w-full border border-slate-100">
      {/* key={stock} forces React to destroy and recreate this div 
          whenever the stock changes. This fixes the "blank chart" 
          issues when switching symbols.
      */}
      <div className="h-full w-full" ref={container} key={stock}>
        <div className="tradingview-widget-container" style={{ height: "100%", width: "100%" }}>
          <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingChart);