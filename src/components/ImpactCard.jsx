import React from "react";

function ImpactCard({ news }) {
  const { analysis, article } = news;

  // Color Coding based on Impact
  const colors = {
    Negative: "bg-red-50 border-red-200 text-red-700",
    Positive: "bg-green-50 border-green-200 text-green-700",
    Neutral: "bg-slate-50 border-slate-200 text-slate-600",
  };

  const theme = colors[analysis.sentiment] || colors.Neutral;
  const arrowColor = analysis.sentiment === "Negative" ? "text-red-400" : analysis.sentiment === "Positive" ? "text-green-400" : "text-slate-300";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-0 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        
        {/* LEFT: GLOBAL NEWS */}
        <div className="p-5 md:w-3/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 uppercase tracking-wider">
                {analysis.region}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {article.timeAgo}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 leading-snug mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-slate-500 line-clamp-2">
              {article.source}
            </p>
          </div>
          <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 mt-4 hover:underline">
            Read Source →
          </a>
        </div>

        {/* MIDDLE: CONNECTING ARROW (Desktop only) */}
        <div className="hidden md:flex flex-col justify-center items-center w-12 relative">
          <div className="h-full w-[1px] bg-slate-100 absolute"></div>
          <div className={`z-10 bg-white p-1 rounded-full border border-slate-100 ${arrowColor}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* RIGHT: INDIAN IMPACT ANALYSIS */}
        <div className={`p-5 md:w-2/5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 ${theme}`}>
          <div className="mb-1 text-xs font-bold opacity-70 uppercase tracking-wide">
            IMPACT ON INDIA
          </div>
          <div className="font-extrabold text-xl mb-1 flex items-center gap-2">
            {analysis.sentiment === "Positive" && "🚀 Bullish"}
            {analysis.sentiment === "Negative" && "⚠️ Bearish"}
            {analysis.sentiment === "Neutral" && "⚖️ Neutral"}
          </div>
          <p className="text-sm font-medium opacity-90 leading-relaxed">
            "{analysis.reason}"
          </p>
          
          {/* Sectors Affected Badge */}
          {analysis.sectors && (
            <div className="mt-3 flex flex-wrap gap-1">
              {analysis.sectors.map((sec, i) => (
                <span key={i} className="px-2 py-1 bg-white/60 rounded text-[10px] font-bold border border-black/5">
                  {sec}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default ImpactCard;