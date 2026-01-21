/**
 * News Page Component
 * 
 * INTERVIEW CONCEPTS:
 * - Infinite Scroll: Loading more items as user scrolls
 * - Pagination Logic: Slicing array to show items in batches
 * - Async/Await: Fetching data from external API
 * - XML Parsing: Parsing RSS feed (XML format)
 * - CORS Proxy: Using allorigins.win to bypass CORS restrictions
 * - Event Listeners: Scroll event handling with cleanup
 * - Multiple useEffect: Different effects for different purposes
 * - Loading States: Managing loading state for better UX
 * 
 * WHY INFINITE SCROLL?
 * - Better UX than pagination (no clicking "Next")
 * - Loads content progressively (performance)
 * - Common pattern in social media/news apps
 */

import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import NewsSkeleton from "../components/NewsSkeleton";

// ⚙️ CONFIG: How many cards to show at a time
// INTERVIEW Q: Why use constant instead of hardcoding?
// A: Makes it easy to change, single source of truth, better maintainability
const ITEMS_PER_PAGE = 8;

function News() {
  // ==========================================
  // 1. STATE MANAGEMENT
  // ==========================================
  
  /**
   * STATE VARIABLES:
   * 
   * allNews: Complete list of fetched news items
   * - Fetched once on mount
   * - Never changes after initial fetch
   * 
   * visibleNews: Items currently displayed on screen
   * - Grows as user scrolls (infinite scroll)
   * - Starts empty, gets populated in batches
   * 
   * page: Current page number for pagination
   * - Starts at 1 (not 0, for human readability)
   * - Increments when loadMore() is called
   * 
   * loading: Loading state indicator
   * - true: Show skeleton/loading spinner
   * - false: Show content
   * 
   * hasMore: Whether more items can be loaded
   * - true: More items available
   * - false: Reached end of list
   * 
   * INTERVIEW Q: Why separate allNews and visibleNews?
   * A: allNews = source data, visibleNews = what's shown (performance optimization)
   */
  const [allNews, setAllNews] = useState([]);
  const [visibleNews, setVisibleNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  // ==========================================
  // 2. FETCHING DATA
  // ==========================================
  
  /**
   * useEffect: Data Fetching on Mount
   * 
   * DEPENDENCY: [] (empty array)
   * - Runs ONLY once when component mounts
   * - INTERVIEW Q: What happens if dependency array is missing?
   * A: Effect runs on every render (infinite loop risk)
   * 
   * ASYNC FUNCTION INSIDE useEffect:
   * - useEffect can't be async directly
   * - Define async function inside, then call it
   * - INTERVIEW Q: Why can't useEffect be async?
   * A: useEffect must return cleanup function or undefined, async functions return Promise
   */
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true); // Show loading state
        
        // RSS FEED URL
        // Google News RSS with query parameters:
        // - q: Search query (Indian Stock Market news)
        // - when:2d: Only last 48 hours
        // - hl: Language (en-IN)
        // - gl: Country (IN)
        // - ceid: Country+Language code
        const RSS_URL = "https://news.google.com/rss/search?q=Indian+Stock+Market+Sensex+Nifty+when:2d&hl=en-IN&gl=IN&ceid=IN:en";
        
        // CORS PROXY
        // Google News RSS has CORS restrictions (can't fetch directly from browser)
        // allorigins.win acts as proxy: fetches server-side, returns to client
        // INTERVIEW Q: What is CORS?
        // A: Cross-Origin Resource Sharing - browser security that blocks cross-domain requests
        const API_URL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(RSS_URL);

        // FETCH API
        // Modern replacement for XMLHttpRequest
        // Returns Promise that resolves to Response object
        // INTERVIEW Q: What's the difference between fetch and axios?
        // A: fetch is native, axios is library with more features (interceptors, etc.)
        const res = await fetch(API_URL);
        const xmlText = await res.text(); // Get response as text (XML format)

        // XML PARSING
        // DOMParser: Browser API for parsing XML/HTML strings
        // parseFromString: Converts XML string to DOM-like structure
        // INTERVIEW Q: Why parse XML instead of JSON?
        // A: RSS feeds are XML format (legacy standard), not JSON
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "text/xml");

        // DATA TRANSFORMATION
        // Array.from: Converts NodeList to Array (enables .map())
        // querySelectorAll: Finds all <item> elements in RSS feed
        // map: Transforms each XML item to JavaScript object
        // 
        // OPTIONAL CHAINING (?.) and NULLISH COALESCING (||):
        // - ?.textContent: Safe access (returns undefined if element not found)
        // - || "News": Fallback value if source is missing
        // INTERVIEW Q: What's the difference between ?. and &&?
        // A: ?. returns undefined on null/undefined, && returns falsy value
        const items = Array.from(xml.querySelectorAll("item")).map((item, index) => ({
          id: index, // Using index as ID (not ideal, but works for this use case)
          title: item.querySelector("title")?.textContent,
          link: item.querySelector("link")?.textContent,
          pubDate: item.querySelector("pubDate")?.textContent,
          source: item.querySelector("source")?.textContent || "News",
        }));

        setAllNews(items); // Store all fetched items
        setLoading(false); // Hide loading state
      } catch (error) {
        // ERROR HANDLING
        // INTERVIEW Q: What should you do instead of console.error?
        // A: Show user-friendly error message, log to error tracking service
        console.error("News Error", error);
        setLoading(false); // Always hide loading, even on error
      }
    };
    fetchNews(); // Call the async function
  }, []); // Empty dependency: Run once on mount

  // ==========================================
  // 3. INFINITE SCROLL LOGIC
  // ==========================================
  
  /**
   * loadMore Function
   * 
   * PAGINATION LOGIC:
   * - Calculates start/end indices based on current page
   * - Slices array to get next batch
   * - Appends to visibleNews (doesn't replace)
   * 
   * INTERVIEW Q: Why use functional updates (prev => ...)?
   * A: Ensures we're using latest state, avoids stale closures
   * 
   * INTERVIEW Q: Why spread operator [...prev, ...nextBatch]?
   * A: Creates new array (immutability), appends new items
   */
  const loadMore = () => {
    // GUARD CLAUSES: Early return if conditions not met
    // Prevents loading when already loading or no more items
    if (loading || !hasMore) return;

    // PAGINATION CALCULATION
    // Example: page=1, ITEMS_PER_PAGE=8
    // start = (1-1) * 8 = 0
    // end = 0 + 8 = 8
    // slice(0, 8) gets first 8 items
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const nextBatch = allNews.slice(start, end); // Array.slice() extracts portion
    
    // STATE UPDATES
    // Functional update: Uses previous state to append new items
    // Spread operator: Creates new array (React requires immutability)
    setVisibleNews((prev) => [...prev, ...nextBatch]);
    setPage((prev) => prev + 1); // Increment page for next load
    
    // CHECK IF REACHED END
    // If end index >= total items, no more items to load
    if (end >= allNews.length) setHasMore(false);
  };

  /**
   * useEffect: Initial Load
   * 
   * DEPENDENCY: [allNews]
   * - Runs when allNews is populated (after API fetch)
   * - Loads first batch automatically
   * 
   * CONDITION: Only load if data exists and nothing visible yet
   * - Prevents loading on every allNews change
   * - Only runs once when data first arrives
   */
  useEffect(() => {
    if (allNews.length > 0 && visibleNews.length === 0) loadMore();
  }, [allNews]);

  /**
   * useEffect: Scroll Event Listener
   * 
   * DEPENDENCY: [page, loading, hasMore, allNews]
   * - Re-creates listener when these change
   * - Ensures closure has latest values
   * 
   * SCROLL DETECTION:
   * - window.innerHeight: Viewport height
   * - window.scrollY: Current scroll position
   * - document.body.offsetHeight: Total page height
   * - -500: Trigger 500px before bottom (better UX)
   * 
   * CLEANUP FUNCTION:
   * - Removes event listener on unmount or dependency change
   * - Prevents memory leaks
   * - INTERVIEW Q: Why cleanup event listeners?
   * A: Prevents memory leaks, avoids calling handlers after component unmounts
   */
  useEffect(() => {
    const handleScroll = () => {
      // SCROLL POSITION CHECK
      // If user is within 500px of bottom, load more
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadMore();
      }
    };
    
    // ADD EVENT LISTENER
    window.addEventListener("scroll", handleScroll);
    
    // CLEANUP: Remove listener when effect re-runs or component unmounts
    // INTERVIEW Q: What happens if you don't remove listener?
    // A: Memory leak, handler might be called after component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, loading, hasMore, allNews]); // Re-create listener when these change

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