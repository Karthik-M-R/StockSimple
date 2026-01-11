import React from "react";

// 🎨 CARTOON THEME ENGINE (Dark Mode Updated 🌙)
const getComicTheme = (title) => {
  const t = title.toLowerCase();

  // 1. BEARISH / DANGER (Red)
  if (t.includes("crash") || t.includes("fall") || t.includes("loss") || t.includes("bear") || t.includes("low") || t.includes("down")) 
    return { 
      emoji: "📉", 
      bg: "bg-rose-50 dark:bg-rose-900/20", 
      border: "border-rose-900 dark:border-rose-500", 
      text: "text-rose-900 dark:text-rose-200", 
      shadow: "shadow-rose-900 dark:shadow-rose-900/50" // Colored shadow
    };

  // 2. BULLISH / GROWTH (Green)
  if (t.includes("surge") || t.includes("high") || t.includes("jump") || t.includes("bull") || t.includes("profit") || t.includes("gain") || t.includes("record")) 
    return { 
      emoji: "🚀", 
      bg: "bg-green-50 dark:bg-green-900/20", 
      border: "border-green-900 dark:border-green-500", 
      text: "text-green-900 dark:text-green-200", 
      shadow: "shadow-green-900 dark:shadow-green-900/50" 
    };

  // 3. BANKING / MONEY (Blue)
  if (t.includes("bank") || t.includes("rbi") || t.includes("loan") || t.includes("hdfc") || t.includes("sbi") || t.includes("rupee")) 
    return { 
      emoji: "🏦", 
      bg: "bg-blue-50 dark:bg-blue-900/20", 
      border: "border-blue-900 dark:border-blue-500", 
      text: "text-blue-900 dark:text-blue-200", 
      shadow: "shadow-blue-900 dark:shadow-blue-900/50" 
    };

  // 4. TECH / FUTURE (Purple)
  if (t.includes("tech") || t.includes("ai") || t.includes("tcs") || t.includes("infosys") || t.includes("wipro") || t.includes("startup")) 
    return { 
      emoji: "🤖", 
      bg: "bg-purple-50 dark:bg-purple-900/20", 
      border: "border-purple-900 dark:border-purple-500", 
      text: "text-purple-900 dark:text-purple-200", 
      shadow: "shadow-purple-900 dark:shadow-purple-900/50" 
    };

  // 5. COMMODITIES / GOLD (Yellow/Amber)
  if (t.includes("gold") || t.includes("silver") || t.includes("oil")) 
    return { 
      emoji: "💎", 
      bg: "bg-amber-50 dark:bg-amber-900/20", 
      border: "border-amber-900 dark:border-amber-500", 
      text: "text-amber-900 dark:text-amber-200", 
      shadow: "shadow-amber-900 dark:shadow-amber-900/50" 
    };

  // 6. AUTO (Orange)
  if (t.includes("auto") || t.includes("car") || t.includes("motors") || t.includes("ev")) 
    return { 
      emoji: "🏎️", 
      bg: "bg-orange-50 dark:bg-orange-900/20", 
      border: "border-orange-900 dark:border-orange-500", 
      text: "text-orange-900 dark:text-orange-200", 
      shadow: "shadow-orange-900 dark:shadow-orange-900/50" 
    };

  // DEFAULT (White/Gray)
  return { 
    emoji: "📰", 
    bg: "bg-white dark:bg-gray-800", 
    border: "border-slate-900 dark:border-gray-500", 
    text: "text-slate-900 dark:text-gray-100", 
    shadow: "shadow-slate-900 dark:shadow-black" 
  };
};

const timeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  if (seconds < 3600) return Math.floor(seconds / 60) + "m ago";
  if (seconds < 86400) return Math.floor(seconds / 3600) + "h ago";
  return Math.floor(seconds / 86400) + "d ago";
};

function NewsCard({ article }) {
  const theme = getComicTheme(article.title);

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative block 
        ${theme.bg} ${theme.border} 
        border-2 sm:border-4 rounded-xl 
        p-5 mb-5 mx-auto max-w-2xl w-full
        transition-all duration-200 ease-out
        shadow-[4px_4px_0px_0px] ${theme.shadow} 
        hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
      `}
    >
      <div className="flex justify-between items-start gap-4">
        
        {/* LEFT: Content */}
        <div className="flex-1 min-w-0">
          {/* Badge Row */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
             {/* 🌙 FIX: Badge Background */}
             <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest border-2 ${theme.border} ${theme.text} bg-white dark:bg-gray-900 rounded-md whitespace-nowrap`}>
                {article.source}
             </span>
             <span className="text-xs font-bold text-slate-500 dark:text-gray-400 whitespace-nowrap">
                {timeAgo(article.pubDate)}
             </span>
          </div>

          {/* Headline */}
          <h2 className={`text-base sm:text-lg font-black leading-tight ${theme.text} line-clamp-3`}>
            {article.title}
          </h2>

          {/* "Read Now" Arrow */}
          <div className="mt-3 flex items-center gap-2 text-xs font-bold opacity-60 group-hover:opacity-100 transition-opacity dark:text-gray-300">
            READ STORY <span className="text-lg">→</span>
          </div>
        </div>

        {/* RIGHT: The "Comic Icon" */}
        <div className={`
            hidden sm:flex items-center justify-center 
            w-16 h-16 rounded-full border-4 bg-white dark:bg-gray-800
            ${theme.border} 
            flex-shrink-0
            transform group-hover:rotate-12 transition-transform duration-300
        `}>
            <span className="text-3xl">{theme.emoji}</span>
        </div>

      </div>
    </a>
  );
}

export default NewsCard;