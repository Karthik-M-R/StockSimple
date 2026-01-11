import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import NewsSkeleton from "../components/NewsSkeleton";

// ⚙️ CONFIG: How many cards to show at a time
const ITEMS_PER_PAGE = 8;

function News() {
  // ==========================================
  // 1. STATE MANAGEMENT
  // ==========================================
  const [allNews, setAllNews] = useState([]);
  const [visibleNews, setVisibleNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  // ==========================================
  // 2. FETCHING DATA
  // ==========================================
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Forces Google to only give news from the last 48 hours ("when:2d")
        const RSS_URL = "https://news.google.com/rss/search?q=Indian+Stock+Market+Sensex+Nifty+when:2d&hl=en-IN&gl=IN&ceid=IN:en";
        const API_URL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(RSS_URL);

        const res = await fetch(API_URL);
        const xmlText = await res.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "text/xml");

        const items = Array.from(xml.querySelectorAll("item")).map((item, index) => ({
          id: index,
          title: item.querySelector("title")?.textContent,
          link: item.querySelector("link")?.textContent,
          pubDate: item.querySelector("pubDate")?.textContent,
          source: item.querySelector("source")?.textContent || "News",
        }));

        setAllNews(items);
        setLoading(false);
      } catch (error) {
        console.error("News Error", error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // ==========================================
  // 3. INFINITE SCROLL LOGIC
  // ==========================================
  const loadMore = () => {
    if (loading || !hasMore) return;

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const nextBatch = allNews.slice(start, end);
    
    setVisibleNews((prev) => [...prev, ...nextBatch]);
    setPage((prev) => prev + 1);
    
    if (end >= allNews.length) setHasMore(false);
  };

  useEffect(() => {
    if (allNews.length > 0 && visibleNews.length === 0) loadMore();
  }, [allNews]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, loading, hasMore, allNews]);

  // ==========================================
  // 4. THE UI (Dark Mode Updated 🌙)
  // ==========================================
  return (
    <div 
      className="min-h-screen py-10 transition-colors duration-300 bg-[#fafafa] dark:bg-gray-950"
      style={{ 
        // This makes the dot pattern subtle in both modes
        backgroundImage: 'radial-gradient(var(--tw-gradient-stops))', 
        '--tw-gradient-from': 'rgba(229, 231, 235, 1) 1px', // Light mode dots
        '--tw-gradient-to': 'transparent 1px',
        backgroundSize: '20px 20px' 
      }}
    >
      {/* In Tailwind v4, complex inline styles for gradients can be tricky. 
         A simpler way for the dark dots if the above style doesn't swap automatically:
         Just use standard classes for the background color and let the dots be subtle.
      */}
      
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase drop-shadow-[3px_3px_0_rgba(0,0,0,0.2)] text-slate-900 dark:text-white">
            Market <span className="text-blue-600 dark:text-blue-400">Flash</span> ⚡
          </h1>
          <p className="mt-3 font-bold px-4 py-1 border-2 rounded-full shadow-[3px_3px_0_black] inline-block
            text-slate-500 bg-white border-slate-900 
            dark:text-slate-300 dark:bg-gray-800 dark:border-gray-600 dark:shadow-[3px_3px_0_rgba(255,255,255,0.2)]">
            DAILY BYTES • FRESH 48H
          </p>
        </div>

        {/* NEWS FEED */}
        <div className="flex flex-col gap-2">
          
          {loading && visibleNews.length === 0 && (
             <>
               <NewsSkeleton />
               <NewsSkeleton />
               <NewsSkeleton />
               <NewsSkeleton />
             </>
          )}

          {visibleNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}

          {loading && visibleNews.length > 0 && (
            <div className="flex justify-center py-6">
              <span className="text-xl font-bold animate-pulse text-slate-400 dark:text-slate-600">
                Loading more...
              </span>
            </div>
          )}

          {!hasMore && !loading && visibleNews.length > 0 && (
             <div className="text-center py-8 opacity-50 font-bold dark:text-gray-400">
               ✓ That's all for now!
             </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default News;