import React, { useState } from "react";

/**
 * PollBox Component
 * 
 * INTERVIEW CONCEPTS:
 * - Object State: Managing complex state with objects
 * - Default Props: Fallback value if prop not provided
 * - State Updates: Functional updates for object state
 * - Array Methods: reduce() for calculations
 * - Conditional Rendering: Showing results only after vote
 * - Event Handlers: onClick for voting
 * - Immutability: Creating new objects instead of mutating
 * 
 * WHY OBJECT STATE?
 * - Multiple related values (Buy, Hold, Sell votes)
 * - Easier to manage than separate useState calls
 * - Can be extended easily (add more options)
 */

function PollBox({ stock = "TATA MOTORS" }) {
  /**
   * STATE: Vote Counts
   * 
   * Object State Pattern:
   * - Stores multiple related values in one state
   * - INTERVIEW Q: Why object instead of separate useState?
   * A: Related data, easier updates, single source of truth
   * 
   * DEFAULT VALUES: All start at 0
   * - No dummy data (realistic initial state)
   * - INTERVIEW Q: Why start at 0?
   * A: Represents actual state (no votes yet), not fake data
   */
  const [votes, setVotes] = useState({
    Buy: 0,
    Hold: 0,
    Sell: 0,
  });

  /**
   * STATE: User's Vote
   * 
   * null: User hasn't voted yet
   * "Buy"/"Hold"/"Sell": User's choice
   * 
   * INTERVIEW Q: Why track userVote separately?
   * A: Prevents multiple votes, shows which option user selected
   */
  const [userVote, setUserVote] = useState(null);

  /**
   * CALCULATED VALUE: Total Votes
   * 
   * Object.values(): Gets array of vote counts [0, 0, 0]
   * reduce(): Sums all values
   * 
   * INTERVIEW Q: Why calculate instead of storing in state?
   * A: Derived value - can be computed from votes state (single source of truth)
   * 
   * INTERVIEW Q: What's the difference between reduce and map?
   * A: reduce returns single value (sum), map returns array of same length
   */
  const totalVotes = Object.values(votes).reduce((sum, v) => sum + v, 0);

  /**
   * getSentiment Function
   * 
   * SENTIMENT ANALYSIS:
   * - Determines market sentiment based on vote distribution
   * - Buy > others = Bullish
   * - Sell > others = Bearish
   * - Hold > others = Neutral
   * 
   * INTERVIEW Q: Why function instead of useMemo?
   * A: Simple calculation, no performance concern. useMemo would be overkill.
   * 
   * @returns {Object|null} - Sentiment data or null if no votes
   */
  const getSentiment = () => {
    // GUARD: Return null if no votes (can't determine sentiment)
    if (totalVotes === 0) return null;
    
    // FIND MAXIMUM VOTE COUNT
    // Math.max() finds highest value among the three options
    const max = Math.max(votes.Buy, votes.Hold, votes.Sell);
    
    // SAFETY CHECK: Handle edge case (shouldn't happen, but defensive)
    if (max === 0) return null;

    // DETERMINE SENTIMENT BASED ON WINNING OPTION
    // First match wins (Buy checked first, then Sell, then default to Neutral)
    if (votes.Buy === max) return { text: "Bullish", color: "text-emerald-600 bg-emerald-50 border-emerald-200" };
    if (votes.Sell === max) return { text: "Bearish", color: "text-rose-600 bg-rose-50 border-rose-200" };
    return { text: "Neutral", color: "text-amber-600 bg-amber-50 border-amber-200" };
  };

  const sentiment = getSentiment();

  /**
   * handleVote Function
   * 
   * VOTE HANDLING LOGIC:
   * - Prevents multiple votes (one vote per user)
   * - Updates vote count for selected option
   * - Records user's choice
   * 
   * INTERVIEW CONCEPTS:
   * - Guard Clause: Early return to prevent action
   * - Functional State Update: Using previous state
   * - Spread Operator: Object immutability
   * - Computed Property Names: [option] for dynamic key
   * 
   * @param {string} option - "Buy", "Hold", or "Sell"
   */
  const handleVote = (option) => {
    // GUARD CLAUSE: Prevent multiple votes
    // If userVote exists, return early (don't allow another vote)
    // INTERVIEW Q: Why check userVote instead of disabling button?
    // A: Defense in depth - both UI and logic prevent double voting
    if (userVote) return;

    /**
     * STATE UPDATE: Increment Vote Count
     * 
     * Functional Update Pattern:
     * - setVotes((prev) => ...) uses previous state
     * - Ensures we're working with latest state
     * 
     * Spread Operator:
     * - ...prev: Copies all existing properties
     * - [option]: Computed property name (dynamic key)
     * - prev[option] + 1: Increments the selected option's count
     * 
     * INTERVIEW Q: Why spread operator?
     * A: React requires immutability - create new object, don't mutate existing
     * 
     * Example: If option="Buy"
     * - Before: {Buy: 0, Hold: 0, Sell: 0}
     * - After: {Buy: 1, Hold: 0, Sell: 0}
     */
    setVotes((prev) => ({
      ...prev,                    // Copy all existing votes
      [option]: prev[option] + 1, // Increment selected option
    }));
    
    // RECORD USER'S VOTE
    // Prevents future votes and shows which option user selected
    setUserVote(option);
  };

  // Style Configuration
  const config = {
    Buy: { 
        base: "hover:border-emerald-400 hover:text-emerald-600", 
        active: "border-emerald-500 bg-emerald-50 text-emerald-700", 
        bar: "bg-emerald-500" 
    },
    Hold: { 
        base: "hover:border-amber-400 hover:text-amber-600", 
        active: "border-amber-500 bg-amber-50 text-amber-700", 
        bar: "bg-amber-400" 
    },
    Sell: { 
        base: "hover:border-rose-400 hover:text-rose-600", 
        active: "border-rose-500 bg-rose-50 text-rose-700", 
        bar: "bg-rose-500" 
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 max-w-md w-full mx-auto font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            {stock}
          </h3>
          <p className="text-sm text-slate-500 font-medium">
            {totalVotes === 0 ? "Be the first to vote" : "Community Consensus"}
          </p>
        </div>
        
        {/* Dynamic Sentiment Badge */}
        {sentiment && (
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${sentiment.color} animate-fade-in`}>
            {sentiment.text}
          </span>
        )}
      </div>

      {/* --- VOTING AREA --- */}
      <div className="space-y-4">
        {["Buy", "Hold", "Sell"].map((option) => {
          // Calculate Percentage (Handle division by zero safety)
          const percentage = totalVotes === 0 ? 0 : Math.round((votes[option] / totalVotes) * 100);
          
          const isSelected = userVote === option;
          const styles = config[option];

          return (
            <div key={option} className="relative">
              <button
                onClick={() => handleVote(option)}
                disabled={!!userVote}
                className={`w-full relative overflow-hidden transition-all duration-300 border-2 rounded-xl p-4 flex justify-between items-center group
                  ${userVote 
                    ? isSelected 
                      ? `${styles.active} shadow-inner` 
                      : "border-slate-100 bg-slate-50 text-slate-400 opacity-70"
                    : `bg-white border-slate-200 text-slate-700 ${styles.base} hover:shadow-md hover:-translate-y-0.5`
                  }
                `}
              >
                {/* Label */}
                <div className="flex items-center gap-2 z-10">
                  <span className="font-bold text-lg">{option}</span>
                  {isSelected && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-white/60 border border-black/5 text-slate-800">
                      Your Vote
                    </span>
                  )}
                </div>

                {/* Percentage (Visible only after voting) */}
                {userVote && (
                  <span className="font-bold text-lg z-10 animate-in fade-in slide-in-from-right-4 duration-500">
                    {percentage}%
                  </span>
                )}

                {/* Progress Bar (Visible only after voting) */}
                {userVote && (
                  <div 
                    className={`absolute left-0 top-0 bottom-0 opacity-10 transition-all duration-1000 ease-out ${styles.bar}`}
                    style={{ width: `${percentage}%` }}
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* --- FOOTER --- */}
      <div className="mt-6 flex justify-between items-center text-xs text-slate-400 border-t border-slate-100 pt-4">
        <span>Poll closes in 24h</span>
        <span className="font-medium text-slate-600">
           {totalVotes} {totalVotes === 1 ? 'vote' : 'votes'} cast
        </span>
      </div>
    </div>
  );
}

export default PollBox;