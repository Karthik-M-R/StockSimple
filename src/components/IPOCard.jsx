import React from "react";

function IPOCard({ data }) {
  const { article, analysis } = data;

  // 🌙 FIX 1: Update Themes for Dark Mode
  // We use opacity (e.g., /20) for backgrounds so they aren't too overpowering in dark mode.
  const theme = {
    Hot: "border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-600/50",
    Cold: "border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-800/50",
    Neutral: "border-slate-200 bg-white dark:bg-gray-800 dark:border-gray-700",
  }[analysis.sentiment] || "border-slate-200 bg-white dark:bg-gray-800 dark:border-gray-700";

  // 🌙 FIX 2: Update Badge Colors
  const badgeColor = {
    Hot: "bg-green-600 text-white dark:bg-green-700",
    Cold: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-200",
    Neutral: "bg-slate-100 text-slate-600 dark:bg-gray-700 dark:text-gray-300",
  }[analysis.sentiment];

  return (
    <div className={`relative p-5 rounded-xl border-2 ${theme} shadow-sm transition-all hover:shadow-md flex flex-col justify-between h-full`}>
      
      {/* 1. HEADER: Source & Time */}
      <div className="flex justify-between items-center mb-3 text-slate-500 dark:text-gray-400">
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
          {article.source}
        </span>
        <span className="text-[10px] font-medium opacity-60">
          {article.timeAgo}
        </span>
      </div>

      {/* 2. TITLE (The News) */}
      <h3 className="text-lg font-bold text-slate-800 dark:text-gray-100 mb-4 leading-tight">
        {article.title}
      </h3>

      {/* 3. THE "ROBOT" ANALYSIS BOX */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${badgeColor}`}>
            {analysis.sentiment === "Hot" ? "🔥 High Demand" : analysis.sentiment === "Cold" ? "❄️ Weak Signal" : "ℹ️ Update"}
          </span>
          
          {/* Show specific tags if found */}
          {analysis.tags.map(tag => (
             // 🌙 FIX 3: Tags need dark mode borders and text
             <span key={tag} className="px-2 py-1 rounded text-[10px] font-bold border border-slate-200 bg-white text-slate-600 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-300">
               {tag}
             </span>
          ))}
        </div>

        <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">
          🤖 Insight: <span className="italic text-slate-600 dark:text-gray-300">{analysis.insight}</span>
        </p>
        
        <a href={article.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
          Read Full Article →
        </a>
      </div>
      
    </div>
  );
}

export default IPOCard;