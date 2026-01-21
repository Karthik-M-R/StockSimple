import { useEffect, useState } from "react";
import IPOCard from "../components/IPOCard";
import Loader from "../components/Loader";

function IPOs() {
  const [ipoNews, setIpoNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===============================================
  // 🧠 THE IPO BRAIN (Heuristic Engine)
  // Scans headlines for IPO-specific keywords
  // ===============================================
  
  /**
   * analyzeIPO Function - Sentiment Analysis Algorithm
   * 
   * INTERVIEW CONCEPTS:
   * - Heuristic Algorithm: Rule-based pattern matching
   * - String Manipulation: toLowerCase(), includes()
   * - Conditional Logic: if-else chains for decision making
   * - Array Operations: push() to build tags array
   * - Early Returns: Multiple exit points based on conditions
   * 
   * WHY HEURISTIC INSTEAD OF ML?
   * - Simple, fast, no training data needed
   * - Good enough for MVP/demo
   * - ML would be better for production (more accurate)
   * 
   * INTERVIEW Q: How would you improve this?
   * A: Use NLP library, machine learning, or sentiment analysis API
   * 
   * @param {string} title - News article headline
   * @returns {Object} - {sentiment, tags, insight}
   */
  const analyzeIPO = (title) => {
    // NORMALIZE INPUT
    // Convert to lowercase for case-insensitive matching
    // INTERVIEW Q: Why toLowerCase()?
    // A: Makes matching case-insensitive ("GMP" = "gmp" = "Gmp")
    const t = title.toLowerCase();
    
    // INITIALIZE DEFAULT VALUES
    // These will be modified based on keyword detection
    let sentiment = "Neutral";
    let tags = [];
    let insight = "General IPO news update.";

    // 1. CHECK FOR GMP (Grey Market Premium)
    // GMP is a key indicator of IPO demand
    // INTERVIEW Q: What is GMP?
    // A: Grey Market Premium - unofficial price before listing, indicates demand
    if (t.includes("gmp") || t.includes("grey market") || t.includes("premium")) {
      tags.push("GMP"); // Add tag for categorization
      
      // POSITIVE GMP SIGNALS
      // Keywords indicating rising GMP (bullish)
      if (t.includes("jump") || t.includes("rise") || t.includes("high") || t.includes("surge")) {
        sentiment = "Hot";
        insight = "Grey Market Premium is rising. Listing gain expected.";
      } 
      // NEGATIVE GMP SIGNALS
      // Keywords indicating falling GMP (bearish)
      else if (t.includes("fall") || t.includes("drop") || t.includes("discount") || t.includes("weak")) {
        sentiment = "Cold";
        insight = "GMP is falling. Listing might be flat or negative.";
      } 
      // NEUTRAL GMP MENTION
      else {
        insight = "Check latest GMP rates before applying.";
      }
    }

    // 2. CHECK FOR SUBSCRIPTION STATUS
    if (t.includes("subscribe") || t.includes("booked") || t.includes("bidding")) {
      tags.push("Subscription");
      if (t.includes("full") || t.includes("over") || t.includes("high demand") || t.includes("times")) {
        sentiment = "Hot";
        insight = "Strong demand from investors. Likely oversubscribed.";
      } else if (t.includes("low") || t.includes("mute") || t.includes("slow")) {
        sentiment = "Cold";
        insight = "Investor interest seems low so far.";
      }
    }

    // 3. CHECK FOR LISTING
    if (t.includes("list") || t.includes("debut")) {
      tags.push("Listing");
      if (t.includes("premium") || t.includes("gain") || t.includes("strong")) {
        sentiment = "Hot";
        insight = "Stock likely to list at a profit.";
      }
    }

    // 4. CHECK FOR SEBI / APPROVAL (Neutral/Info)
    if (t.includes("sebi") || t.includes("files") || t.includes("drhp") || t.includes("approval")) {
      tags.push("Regulatory");
      insight = "Company moving towards IPO launch.";
    }

    return { sentiment, tags, insight };
  };

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const hours = Math.floor((now - date) / 36e5);
    return hours > 24 ? Math.floor(hours / 24) + "d ago" : hours + "h ago";
  };

  // ===============================================
  // 📡 FETCH DATA
  // ===============================================
  useEffect(() => {
    const fetchIPONews = async () => {
      try {
        setLoading(true);
        // Query Logic: "IPO India" AND ("GMP" OR "Subscription" OR "Listing")
        const RSS_URL = "https://news.google.com/rss/search?q=IPO+India+GMP+Subscription+Listing+when:7d&hl=en-IN&gl=IN&ceid=IN:en";
        const API_URL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(RSS_URL);

        const res = await fetch(API_URL);
        const xmlText = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "text/xml");

        const items = Array.from(xml.querySelectorAll("item")).map((item, index) => {
          const title = item.querySelector("title")?.textContent || "";
          
          return {
            id: index,
            article: {
              title: title,
              link: item.querySelector("link")?.textContent,
              pubDate: item.querySelector("pubDate")?.textContent,
              timeAgo: timeAgo(item.querySelector("pubDate")?.textContent),
              source: item.querySelector("source")?.textContent || "News"
            },
            // Run the Brain
            analysis: analyzeIPO(title)
          };
        });

        setIpoNews(items);
        setLoading(false);
      } catch (error) {
        console.error("IPO Fetch Error", error);
        setLoading(false);
      }
    };

    fetchIPONews();
  }, []);

  return (
    // 🌙 FIX 1: Main background to Dark Gray
    <div className="min-h-screen py-12 bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          {/* 🌙 FIX 2: Text colors for dark mode */}
          <h1 className="text-4xl font-black mb-2 text-slate-900 dark:text-white">
            IPO <span className="text-indigo-600 dark:text-indigo-400">Scanner</span> 📡
          </h1>
          <p className="text-slate-500 dark:text-gray-400">
            Real-time news scanner for GMP, Subscriptions, and Listings.
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="flex justify-center py-20"><Loader /></div>
        )}

        {/* GRID */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ipoNews.map((item) => (
              <IPOCard key={item.id} data={item} />
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && ipoNews.length === 0 && (
          <div className="text-center py-10 text-slate-400 dark:text-gray-500">
            No active IPO news found in the last 7 days.
          </div>
        )}

      </div>
    </div>
  );
}

export default IPOs;