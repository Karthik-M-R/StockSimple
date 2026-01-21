/**
 * TradingChart Component
 * 
 * INTERVIEW CONCEPTS:
 * - useRef: Direct DOM manipulation for third-party widgets
 * - useEffect: Side effects (script injection) when stock prop changes
 * - memo: Prevents re-renders when parent updates (performance optimization)
 * - Dynamic script injection: Loading external widgets that need DOM access
 * - Cleanup: Clearing innerHTML prevents memory leaks and widget conflicts
 * 
 * WHY THIS PATTERN?
 * TradingView widget requires direct DOM manipulation. React's virtual DOM
 * doesn't work well with third-party scripts that inject their own HTML.
 * We use useRef to get direct access to the DOM element.
 */

import React, { useEffect, useRef, memo } from 'react';

function TradingChart({ stock }) {
  // useRef: Creates a mutable reference that persists across re-renders
  // Unlike useState, changing .current doesn't trigger a re-render
  // Used here to get direct DOM access for third-party widget injection
  const container = useRef();

  /**
   * useEffect Hook - Runs after component mounts and when dependencies change
   * Dependency: [stock] - Re-runs whenever stock prop changes
   * 
   * INTERVIEW Q: Why useEffect and not componentDidMount?
   * A: useEffect combines mount + update logic. Cleaner than class lifecycle methods.
   */
  useEffect(() => {
    // STEP 1: INPUT SANITIZATION
    // Remove spaces and convert to uppercase for API compatibility
    // Example: "TATA MOTORS" -> "TATAMOTORS"
    // Fallback to "NIFTY" if stock is empty/null (defensive programming)
    const cleanSymbol = stock ? stock.replace(/\s/g, "").toUpperCase() : "NIFTY";
    
    // STEP 2: EXCHANGE DETECTION
    // NIFTY and BANKNIFTY are indices, not individual stocks
    // TradingView requires "NSE:" prefix for indices, "BSE:" for stocks
    // This logic determines which exchange format to use
    const isIndex = cleanSymbol === "NIFTY" || cleanSymbol === "BANKNIFTY";
    const finalSymbol = isIndex ? `NSE:${cleanSymbol}` : `BSE:${cleanSymbol}`;

    // STEP 3: CLEANUP PREVIOUS WIDGET
    // CRITICAL: Clear container before adding new script
    // Why? TradingView scripts can conflict if multiple instances exist
    // This prevents "blank chart" bugs when switching symbols
    // INTERVIEW Q: Why not use React state for this?
    // A: Third-party widgets manipulate DOM directly. React state won't help here.
    if (container.current) {
        container.current.innerHTML = ""; 
    }

    // STEP 4: DYNAMIC SCRIPT INJECTION
    // Create script element programmatically (not in JSX)
    // This is necessary because TradingView widget loads asynchronously
    // and needs to be injected into the DOM at runtime
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true; // Non-blocking script loading (performance)
    
    // STEP 5: WIDGET CONFIGURATION
    // TradingView expects config as JSON string in script.innerHTML
    // This is their API pattern - not standard React, but required by widget
    script.innerHTML = JSON.stringify({
      "autosize": true,        // Responsive sizing
      "symbol": finalSymbol,    // The stock/index to display
      "interval": "D",          // Daily candles (D = Day)
      "timezone": "Asia/Kolkata", // Indian market timezone
      "theme": "light",         // Chart theme (could be dynamic based on app theme)
      "style": "1",             // Chart style (1 = Candles)
      "locale": "in",           // Indian locale
      "enable_publishing": false, // Disable sharing (free tier requirement)
      "allow_symbol_change": true, // Let users change symbol in widget
      "hide_top_toolbar": false,
      "hide_side_toolbar": false,
      "save_image": false,
      "calendar": false,
      "support_host": "https://www.tradingview.com"
    });

    // STEP 6: APPEND TO DOM
    // Add script to container. This triggers TradingView to initialize widget
    container.current.appendChild(script);

    // CLEANUP FUNCTION (optional but recommended)
    // If component unmounts or stock changes, remove script
    // Prevents memory leaks and orphaned widgets
    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [stock]); // Dependency array: Only re-run when stock changes 

  /**
   * JSX RETURN
   * 
   * KEY PROP: key={stock}
   * - Forces React to completely destroy and recreate the div when stock changes
   * - This ensures TradingView widget fully reinitializes with new symbol
   * - Without key, React might reuse the same DOM node, causing widget conflicts
   * 
   * REF ATTACHMENT: ref={container}
   * - Attaches the useRef to this div element
   * - container.current will point to this DOM node
   * - Allows us to manipulate it directly in useEffect
   * 
   * STYLING: Inline styles for TradingView container
   * - TradingView requires specific class names and structure
   * - Inline styles ensure proper sizing
   */
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 h-[600px] w-full border border-slate-100">
      {/* 
        INTERVIEW CONCEPT: React key prop
        When key changes, React treats it as a completely new element
        This forces unmount of old widget and mount of new one
        Critical for third-party widgets that don't play well with React's reconciliation
      */}
      <div className="h-full w-full" ref={container} key={stock}>
        {/* TradingView requires these specific class names */}
        <div className="tradingview-widget-container" style={{ height: "100%", width: "100%" }}>
          <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
}

/**
 * React.memo() - Higher Order Component (HOC)
 * 
 * INTERVIEW CONCEPT: Memoization
 * - Wraps component to prevent unnecessary re-renders
 * - Only re-renders if props actually change (shallow comparison)
 * - TradingChart is expensive (third-party widget), so memoization is crucial
 * 
 * INTERVIEW Q: When should you use memo?
 * A: When component is expensive to render AND receives props that don't change often
 * 
 * INTERVIEW Q: What's the difference between memo and useMemo?
 * A: memo() memoizes entire component, useMemo() memoizes computed values
 */
export default memo(TradingChart);