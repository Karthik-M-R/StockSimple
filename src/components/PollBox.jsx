import React, { useState } from "react";

function PollBox({ stock = "TATA MOTORS" }) {
  // 1. START WITH ZERO (No dummy data)
  const [votes, setVotes] = useState({
    Buy: 0,
    Hold: 0,
    Sell: 0,
  });

  const [userVote, setUserVote] = useState(null);

  // 2. Calculate Total dynamically
  const totalVotes = Object.values(votes).reduce((sum, v) => sum + v, 0);

  // 3. Sentiment Logic (Only runs if there are votes)
  const getSentiment = () => {
    if (totalVotes === 0) return null;
    
    const max = Math.max(votes.Buy, votes.Hold, votes.Sell);
    
    // Handle tie-breaking or zero states safely
    if (max === 0) return null;

    if (votes.Buy === max) return { text: "Bullish", color: "text-emerald-600 bg-emerald-50 border-emerald-200" };
    if (votes.Sell === max) return { text: "Bearish", color: "text-rose-600 bg-rose-50 border-rose-200" };
    return { text: "Neutral", color: "text-amber-600 bg-amber-50 border-amber-200" };
  };

  const sentiment = getSentiment();

  // 4. Vote Handler
  const handleVote = (option) => {
    if (userVote) return; // Prevent multiple votes

    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1, // Increment from 0 to 1
    }));
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