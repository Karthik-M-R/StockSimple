/**
 * Home Page Component
 * 
 * INTERVIEW CONCEPTS:
 * - useOutletContext: Accessing data from parent Layout route
 * - Conditional Rendering: Showing components only when stock is searched
 * - Component Composition: Combining multiple child components
 * - Key Prop: Forcing re-render when stock changes
 * 
 * WHY useOutletContext?
 * - Stock state is managed in Layout (parent)
 * - Home needs access to it (child)
 * - Alternative: Props drilling (passing through multiple components)
 * - Context API would work but is overkill for this simple case
 */

import { useOutletContext } from "react-router-dom";
import TradingChart from "../components/TradingChart";
import PollBox from "../components/PollBox";
import HomeBasics from "../components/HomeBasics";
import SentimentBox from "../components/SentimentBox";

function Home() {
  /**
   * useOutletContext Hook
   * - Retrieves context value passed from Layout's <Outlet context={{ stock }} />
   * - INTERVIEW Q: What's the difference between useOutletContext and useContext?
   * A: useOutletContext is route-specific, useContext is for React Context API
   * 
   * DESTRUCTURING:
   * - Extracts stock from context object
   * - stock will be empty string initially, then populated when user searches
   */
  const { stock } = useOutletContext();

  return (
    <div className="space-y-12">
      {/* 
        CONDITIONAL RENDERING
        - Only shows stock-related components if stock is truthy (not empty)
        - INTERVIEW Q: Why use && instead of ternary?
        * A: && is cleaner when you only need to show/hide, not show alternative
        * 
        FRAGMENT (<></>):
        - Groups multiple elements without adding extra DOM node
        - INTERVIEW Q: What's the difference between Fragment and div?
        * A: Fragment doesn't create DOM element, div does
      */}
      {stock && (
        <>
          {/* 
            TradingChart Component
            - key={stock}: Forces React to recreate component when stock changes
            - This ensures TradingView widget fully reinitializes
            - INTERVIEW Q: When should you use key prop?
            * A: When you need to force component remount (like here with third-party widget)
          */}
          <TradingChart key={stock} stock={stock} />
          <SentimentBox stock={stock} />
          <PollBox stock={stock} />
        </>
      )}

      {/* 
        HomeBasics Component
        - Always visible (not conditional)
        - Contains educational content about stock market
        - Renders regardless of stock search
      */}
      <HomeBasics />
    </div>
  );
}

export default Home;
