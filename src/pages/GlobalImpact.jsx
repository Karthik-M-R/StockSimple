import { useEffect, useState } from "react";
import ImpactCard from "../components/ImpactCard";
import Loader from "../components/Loader"; // Ensure this exists, or remove if not needed

function GlobalImpact() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // 🧠 THE BRAIN: IMPACT ANALYSIS ENGINE
  // ==========================================
  const analyzeImpact = (title) => {
    const t = title.toLowerCase();

    // 1. US FED / INTEREST RATES
    if (t.includes("fed") || t.includes("powell") || t.includes("rate hike") || t.includes("inflation")) {
      if (t.includes("hike") || t.includes("high") || t.includes("worry")) {
        return { 
          sentiment: "Negative", 
          region: "USA", 
          reason: "Higher US rates pull money out of India (FII Outflow).",
          sectors: ["Bank Nifty", "IT"]
        };
      }
      return { 
        sentiment: "Positive", 
        region: "USA", 
        reason: "Rate cuts usually bring foreign money (FII) into India.",
        sectors: ["All Sectors"]
      };
    }

    // 2. OIL PRICES
    if (t.includes("oil") || t.includes("crude") || t.includes("brent")) {
      if (t.includes("surge") || t.includes("high") || t.includes("jump")) {
        return { 
          sentiment: "Negative", 
          region: "Global", 
          reason: "India imports 80% oil. High prices increase costs & deficit.",
          sectors: ["Paints", "Tyres", "Aviation"]
        };
      }
      return { 
        sentiment: "Positive", 
        region: "Global", 
        reason: "Lower oil prices reduce costs for Indian companies.",
        sectors: ["Paints", "Asian Paints"]
      };
    }

    // 3. US TECH / NASDAQ
    if (t.includes("nasdaq") || t.includes("apple") || t.includes("microsoft") || t.includes("nvidia") || t.includes("tech")) {
      if (t.includes("soar") || t.includes("jump") || t.includes("rally")) {
        return { 
          sentiment: "Positive", 
          region: "US Tech", 
          reason: "Indian IT stocks (TCS, Infy) often mirror US Tech rallies.",
          sectors: ["IT Sector", "TCS", "Infy"]
        };
      }
      return { 
        sentiment: "Negative", 
        region: "US Tech", 
        reason: "US Tech sell-off usually drags down Indian IT stocks.",
        sectors: ["IT Sector"]
      };
    }

    // 4. CHINA
    if (t.includes("china")) {
      if (t.includes("stimulus") || t.includes("growth")) {
        return { 
          sentiment: "Positive", 
          region: "China", 
          reason: "China growth boosts global metal demand (Good for Tata Steel).",
          sectors: ["Metals", "Tata Steel"]
        };
      }
      if (t.includes("slow") || t.includes("lockdown") || t.includes("weak")) {
        return { 
          sentiment: "Negative", 
          region: "China", 
          reason: "China slowdown hurts global demand for metals.",
          sectors: ["Metals"]
        };
      }
    }

    // 5. GOLD
    if (t.includes("gold")) {
      return { 
        sentiment: "Neutral", 
        region: "Commodities", 
        reason: "Gold is a safe haven. High gold often means market fear.",
        sectors: ["Titan", "Muthoot Finance"]
      };
    }

    // DEFAULT
    return { 
      sentiment: "Neutral", 
      region: "Global Market", 
      reason: "Global sentiment affects market opening gap up/down.",
      sectors: ["Nifty 50"]
    };
  };

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const hours = Math.floor((now - date) / 36e5);
    return hours > 24 ? Math.floor(hours / 24) + "d ago" : hours + "h ago";
  };

  // ==========================================
  // 🌍 FETCH GLOBAL NEWS
  // ==========================================
  useEffect(() => {
    const fetchGlobalNews = async () => {
      try {
        setLoading(true);
        const RSS_URL = "https://news.google.com/rss/search?q=US+Economy+Fed+Nasdaq+Crude+Oil+China+Market+when:2d&hl=en-US&gl=US&ceid=US:en";
        const API_URL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(RSS_URL);

        const res = await fetch(API_URL);
        const xmlText = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "text/xml");

        const items = Array.from(xml.querySelectorAll("item"))
          .slice(0, 10)
          .map((item, index) => {
            const title = item.querySelector("title")?.textContent || "";
            const pubDate = item.querySelector("pubDate")?.textContent || "";
            
            return {
              id: index,
              article: {
                title: title,
                source: item.querySelector("source")?.textContent || "Global Wire",
                link: item.querySelector("link")?.textContent,
                timeAgo: timeAgo(pubDate)
              },
              analysis: analyzeImpact(title) 
            };
          });

        setNewsData(items);
        setLoading(false);
      } catch (error) {
        console.error("Fetch Error", error);
        setLoading(false);
      }
    };

    fetchGlobalNews();
  }, []);

  return (
    // 👇 FIX: Background color for the whole page
    <div className="min-h-screen py-12 font-sans transition-colors duration-300 bg-slate-50 text-slate-800 dark:bg-gray-950 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">
          {/* Badge: Adapts from Indigo-100 to Indigo-900 */}
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
            🌎 MACRO ANALYSIS
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Global Impact <span className="text-indigo-600 dark:text-indigo-400">Radar</span>
          </h1>
          <p className="text-slate-500 dark:text-gray-400 mt-2 max-w-2xl">
            How events in New York, London, and Beijing are moving the candles on Dalal Street today.
          </p>
        </div>

        {/* FEED */}
        <div className="flex flex-col gap-6">
          {loading ? (
             <div className="flex justify-center py-20">
               {/* Fallback loader text if you don't have the component */}
               <span className="animate-pulse font-bold text-gray-400">Loading Radar...</span>
             </div>
          ) : (
            newsData.map((news) => (
              <ImpactCard key={news.id} news={news} />
            ))
          )}
        </div>

        {/* DISCLAIMER - Adapts to Dark Gray Box */}
        <div className="mt-12 p-4 rounded-lg text-center text-xs bg-slate-100 text-slate-400 dark:bg-gray-900 dark:text-gray-500">
          <p>⚠️ <strong>Automated Analysis:</strong> Correlation logic is heuristic-based and for educational purposes only. Global markets are complex.</p>
        </div>

      </div>
    </div>
  );
}

export default GlobalImpact;