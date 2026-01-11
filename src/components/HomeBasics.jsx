import React from 'react';
import { BookOpen, TrendingUp, AlertCircle, ArrowRight, CheckCircle, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

// ==========================================
// 📖 THE STORY (Intro Data)
// ==========================================
const introStory = {
  title: "The Great Indian Bazaar: Dalal Street Diaries",
  content: "It started in the 1850s under a Banyan tree in Mumbai, where 5 brokers met to trade cotton. Today, that spot is 'Dalal Street', the financial heart of India. Imagine you want to start a massive factory, but you only have ₹1 Lakh. You need ₹100 Crores. You have two choices: beg a bank for a loan (Debt) or ask the public to become your partners (Equity). The Stock Market is simply a platform where businesses raise money to grow, and in return, share ownership with you.",
  mythBuster: {
    title: "Does the Company get my money when I buy shares?",
    answer: "NO! (Mostly).",
    explanation: "Think of it like buying a second-hand bike. If you buy a Royal Enfield from your friend, Royal Enfield (the company) gets ₹0. The money goes to your friend. Companies only make money once: during the IPO (Initial Public Offering). After that, shares trade between people like you and me in the 'Secondary Market'."
  }
};

// ==========================================
// 🚀 MASTER DATA: SECTIONS
// ==========================================
const stockKnowledge = [
  {
    category: "1. The Arenas: NSE, BSE & Indices",
    description: "Where does the trading actually happen? Understanding the playground.",
    items: [
      {
        title: "BSE vs NSE",
        desc: "BSE (Bombay Stock Exchange) is Asia's oldest. NSE (National Stock Exchange) is the modern giant with high volume.",
        analogy: "BSE is the Heritage Market (lots of shops). NSE is the High-Tech Supermarket (high speed, crowded).",
        imageUrl: "https://imgs.search.brave.com/I1vu31FceVVw9allN9DmuOLaM40faB7hTQG5naQwwek/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c21hbGxjYXNlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wOC9TRU9fTlNF/dnNCU0UtMS5wbmc_/eDQ4Mzc0",
        tip: "Most actively traded stocks have higher liquidity on NSE, making it easier to buy/sell quickly."
      },
      {
        title: "IPO vs Secondary Market",
        desc: "IPO is buying directly from the company. Secondary Market is buying from other people.",
        analogy: "IPO = Buying a new car from the showroom. Secondary = Buying a used car from OLX/Quickr.",
        imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&q=80",
        tip: "Companies only get your money during the IPO. In the secondary market, money just changes hands between traders."
      },
      {
        title: "Nifty 50, Sensex & BankNifty", 
        desc: "Sensex tracks top 30 on BSE. Nifty tracks top 50 on NSE. BankNifty tracks top 12 banks.",
        analogy: "Nifty is the Class Average. BankNifty is the score of the 'Topper' students (Banks).",
        imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&q=80",
        tip: "BankNifty is extremely volatile. Beginners should stick to watching Nifty 50 first."
      }
    ]
  },
  {
    category: "2. Market Cap Categories",
    description: "Market Capitalization = Share Price × Total Number of Shares.",
    items: [
      {
        title: "Large Cap (> ₹20,000 Cr)",
        desc: "The giants. Reliance, TCS, HDFC Bank. Very stable, low risk, moderate returns.",
        analogy: "The Elephants 🐘. They don't run fast (explode in price), but they don't die easily.",
        imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&q=80",
        tip: "Best for beginners. Historically capable of delivering steady long-term returns."
      },
      {
        title: "Mid Cap (₹5k - ₹20k Cr)",
        desc: "Future leaders. Companies like Polycab, Relaxo. Higher growth potential than Large Cap.",
        analogy: "The Horses 🐎. Faster than elephants, but can get spooked and stumble.",
        imageUrl: "https://imgs.search.brave.com/UaZOvIhlNGpcXZU1mnwvSbk0d8BlFZ24RmxiBXs3gTA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/MjQzMjE4L3Bob3Rv/L2dhbGxvcGluZy1o/b3JzZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NUx1ejh3/MElydTkwam1fcVFz/MEFjeTNxQjdFQlp1/SHJiZHdZT2tlOEFk/ST0",
        tip: "Good balance of growth and risk. The 'sweet spot' for investors."
      },
      {
        title: "Small Cap (< ₹5,000 Cr)",
        desc: "New or niche companies. Massive growth potential (100x), but very high risk of failure.",
        analogy: "The Rabbits 🐇. Can multiply incredibly fast, but can be eaten by predators (go bankrupt).",
        imageUrl: "https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?w=500&q=80",
        tip: "High Risk! Only put money you can afford to lose. Can drop 50% in a month."
      }
    ]
  },
  {
    category: "3. Valuation Ratios",
    description: "How to know if a stock is 'Expensive' or 'Cheap'.",
    items: [
      {
        title: "P/E Ratio (Price-to-Earnings)",
        desc: "How much you are paying for ₹1 of profit. High P/E = Expensive, Low P/E = Cheap.",
        analogy: "Buying a shop. If it earns ₹1 Lakh/year and costs ₹20 Lakhs, P/E is 20.",
        imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80",
        tip: "P/E < 20 is usually good/cheap. P/E > 50 means market expects massive future growth."
      },
      {
        title: "P/B Ratio (Price-to-Book)",
        desc: "Price vs the actual value of company assets (cash, land, machines).",
        analogy: "If the company closes today and sells all furniture, what is it worth? P/B compares price to that scrap value.",
        imageUrl: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=500&q=80",
        tip: "P/B < 1.5 is often undervalued (Good Buy). P/B > 5 is premium."
      },
      {
        title: "Dividend Yield",
        desc: "The percentage of share price paid back to you as cash 'interest' every year.",
        analogy: "Rent from a house. Even if house price doesn't go up, you get monthly rent.",
        imageUrl: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=500&q=80",
        tip: "Mature companies (like Coal India) are known for high dividend yields."
      }
    ]
  },
  {
    category: "4. Technical Indicators",
    description: "Used by traders to decide WHEN to enter or exit.",
    items: [
      {
        title: "RSI (Relative Strength Index)",
        desc: "A speedometer (0-100). Tells if a stock is 'Overbought' or 'Oversold'.",
        analogy: "A runner sprinting. RSI > 70 = Tired (Price will drop). RSI < 30 = Rested (Price will jump).",
        imageUrl: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=500&q=80",
        tip: "Buy when RSI is near 30. Sell/Avoid when RSI is near 70-80."
      },
      {
        title: "Volume",
        desc: "The number of shares traded today. Price move without volume is fake.",
        analogy: "Fuel in the car. If the car moves up but has no fuel (Low Volume), it will fall back down.",
        imageUrl: "https://imgs.search.brave.com/KdMGDmQXEs3pTuz7lVCDrbef3DltS50DcjoNhTrBTI0/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2h5LWFyZS10aGUt/YmFycy1pbi12b2x1/bWUtY2hhcnQtcmVk/LW9yLWdyZWVuLWJh/ci1zaXplLXYwLXF2/eDQwYXhxM294YTEu/cG5nP3dpZHRoPTY0/MCZjcm9wPXNtYXJ0/JmF1dG89d2VicCZz/PTJjZmZlZDIwMWNm/Yzg2MTg4MzYxMjI3/NzFlZjY0NWMxMDY3/Zjk2MDE",
        tip: "Only trust a price breakout if the Volume bar is huge/green."
      },
      {
        title: "False Breakouts",
        desc: "When price crosses a resistance line but immediately falls back down.",
        analogy: "A sprinter jumping the gun. They started running, but have to come back to the start line.",
        imageUrl: "https://imgs.search.brave.com/zj93dfnKwIhtGkJ0hIt7AYUltwd2pKIRAvgoCy71J5c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/LmJvb2ttYXAuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzA3LzFfcmVzdWx0/LTUud2VicA",
        tip: "Never buy immediately on breakout. Wait for a 'Retest' or Volume confirmation."
      }
    ]
  },
  {
    category: "5. Chart Patterns",
    description: "Common shapes in charts that predict future moves.",
    items: [
      {
        title: "The Hammer (Buy Signal)",
        desc: "Small body at top, long lower wick. Found at bottom of downtrend.",
        analogy: "Sellers pushed down, Buyers hammered it back up.",
        imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
        tip: "Strongest signal to BUY."
      },
      {
        title: "Bullish Engulfing",
        desc: "Big Green candle completely eats the previous small Red candle.",
        analogy: "Buyers totally overpowering sellers.",
        imageUrl: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?w=500&q=80",
        tip: "Very reliable reversal pattern."
      }
    ]
  },
  {
    category: "6. Trading Styles: Which Player Are You?",
    description: "Every player has a specific time frame. Mixing these styles causes big losses.",
    items: [
      {
        title: "Intraday Trading (The Day Warrior)",
        desc: "Buying and Selling on the SAME day (9:15 AM - 3:30 PM). You never hold the stock overnight. High stress, quick money.",
        analogy: "Daily Wage Worker. You work for the day, get paid (or lose) by evening. You start fresh tomorrow.",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
        tip: "Requires high speed and leverage. If you don't sell by 3:15 PM, the broker force-sells it."
      },
      {
        title: "Swing Trading (The Surfer)",
        desc: "Holding a stock for a few days to a few weeks (2 days - 3 weeks). You aim to catch a short-term trend or 'swing'.",
        analogy: "Surfing. You wait for a good wave (trend), ride it for a bit, and jump off before it crashes.",
        imageUrl: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500&q=80",
        tip: "Best for working professionals. You don't need to watch the screen all day. Check charts once in the evening."
      },
      {
        title: "Positional Trading (The Trend Rider)",
        desc: "Holding for weeks to months (1 month - 12 months). You bet on a larger fundamental change or a massive chart breakout.",
        analogy: "Seasonal Farming. You plant the seeds (buy) and wait for the season (trend) to fully grow before harvesting.",
        imageUrl: "https://imgs.search.brave.com/nxjDGOW8wyqgHIQGGOifon14l0gYmk1OkbRtYP75FBE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc2/OTkxMTU1L3Bob3Rv/L2NvdXJhZ2VvdXMt/cmlkZXIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPThhN3Zu/cDd4bHpmN0dfajJX/blpoQWZoQnY1MXdO/RkdUVm5lYS1uXzRo/ZlU9",
        tip: "Less risky than Swing. You ignore daily noise and focus on the bigger picture."
      },
      {
        title: "Long Term Investing (The Wealth Creator)",
        desc: "Holding for years (3 years, 5 years, or decades). You own a part of the business and grow with it.",
        analogy: "Planting a Mango Tree. It takes years to grow, but once big, it gives fruit for generations.",
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=80",
        tip: "The only method where 'Compounding' works. Best for creating generational wealth."
      },
      {
        title: "F&O - Futures & Options (The Pro Zone)",
        desc: "Betting on the future price direction without owning the stock. Highly leveraged contracts with an Expiry Date.",
        analogy: "Formula 1 Racing with Nitro. Extremely fast, exciting, but one wrong move results in a fatal crash.",
        imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&q=80",
        tip: "90% of retail traders LOSE money in F&O. Do not touch this until you have 2+ years of experience."
      }
    ]
  },
  {
    category: "7. Order Types",
    description: "Before you click 'Buy', you must choose how you want to buy.",
    items: [
      {
        title: "Market vs Limit Order",
        desc: "Market Order = Buy at any price. Limit Order = Buy at YOUR price.",
        analogy: "Market = Buying fish at any price the vendor asks. Limit = Bargaining and waiting for your price.",
        imageUrl: "https://imgs.search.brave.com/53u5sd9siMwB2UbhGWz2Iw1Faa1t9qdoRiTMAbUmehc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aGRmY3NlYy5jb20v/aHNsLmltYWdlcy8z/NSUyMC0lMjBNYXJr/ZXQlMjBvcmRlciUy/MHZzJTIwbGltaXQl/MjBvcmRlci0yMDIz/MDIyMDEyMjMyNDQ4/MTE1ODguanBn",
        tip: "Always use Limit Orders to avoid 'Slippage' (paying more than you intended)."
      },
      {
        title: "Stop Loss (SL)",
        desc: "An automatic trigger to sell if the price drops too much. Prevents big losses.",
        analogy: "The Eject Button in a fighter jet. If the plane (stock) catches fire, you eject before you crash and burn.",
        imageUrl: "https://imgs.search.brave.com/mP-Iv2P42CmpUeFo1LFwHoJ3nfVNwJA0fBDdoZuZ2D0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc2/OTkxMTU1L3Bob3Rv/L2NvdXJhZ2VvdXMt/cmlkZXIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPThhN3Zu/cDd4bHpmN0dfajJX/blpoQWZoQnY1MXdO/RkdUVm5lYS1uXzRo/ZlU9",
        tip: "Never trade without a Stop Loss. It is your insurance policy."
      },
      {
        title: "GTT Order (Good Till Triggered)", 
        desc: "A buy/sell order that stays active for 1 year. You set it and forget it.",
        analogy: "Setting an Alarm Clock. You don't stay awake all night; you sleep, and the alarm wakes you when it's time.",
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80",
        tip: "Perfect for students. Set a 'Buy' price 10% lower and wait for the market to come to you."
      }
    ]
  },
  {
    category: "8. Corporate Actions",
    description: "Events where the company changes its structure.",
    items: [
      {
        title: "Stock Split",
        desc: "The company divides 1 expensive share into multiple cheaper shares. Price drops, quantity increases.",
        analogy: "Cutting a Pizza. You had 1 giant slice. Now you have 4 smaller slices. The total amount of pizza (Value) is exactly the same.",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
        tip: "If a stock drops 50% overnight, check if it was a Split before selling in panic!"
      },
      {
        title: "Bonus Issue",
        desc: "Free shares given to existing shareholders.",
        analogy: "Buy 1 Get 1 Free offer at a supermarket. It rewards loyalty.",
        imageUrl: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&q=80",
        tip: "Great for long-term investors. It increases your quantity without extra cost."
      }
    ]
  },
  {
    category: "9. Market Movers",
    description: "Why does a stock go up or down? It's not magic.",
    items: [
      {
        title: "Quarterly Earnings",
        desc: "Every 3 months, companies announce their profit/loss.",
        analogy: "A Student's Report Card. Good marks = Parents happy (Price Up). Fail = Parents angry (Price Down).",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80",
        tip: "Always check 'Results Calendar' before buying. Volatility is high on result days."
      },
      {
        title: "FII & DII Activity",
        desc: "Foreign & Domestic Institutional Investors (Big Whales).",
        analogy: "Whales in a pool. When a whale jumps in, the water level rises for everyone else.",
        imageUrl: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=500&q=80",
        tip: "Large FII/DII flows often influence the broader market trend."
      }
    ]
  },
  {
    category: "10. Demat & Settlement",
    description: "Understanding the logistics of buying and storing shares.",
    items: [
      {
        title: "Demat vs Trading Account",
        desc: "Trading Account is for buying/selling. Demat Account is for storing.",
        analogy: "Trading Account is your Wallet (Money). Demat Account is your Locker (Shares).",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80",
        tip: "You don't need to check your Demat daily. Just check your broker app."
      },
      {
        title: "T+1 Settlement",
        desc: "When you buy a share today, it comes to your account Tomorrow (T+1).",
        analogy: "Amazon Delivery. You pay now, but the product (share) arrives at your doorstep after 1 day.",
        imageUrl: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=500&q=80",
        tip: "Don't panic if you don't see the share immediately. It takes 24 hours to settle."
      },
      {
        title: "ASBA (IPO Safety)",
        desc: "Money stays in YOUR bank account until you actually get the shares.",
        analogy: "Cash on Delivery. You don't part with your cash until the delivery is confirmed.",
        imageUrl: "https://imgs.search.brave.com/izBbq1R4btosKcr0xqQm5uoqKrOmdQNFlGVc06kukuY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90ZXh0/LWlwby1ub3RlYm9v/ay13aGl0ZS1iYWNr/Z3JvdW5kLWJ1c2lu/ZXNzLXRleHQtaXBv/LW5vdGVib29rLXdo/aXRlLWJhY2tncm91/bmQtYnVzaW5lc3Mt/MzU1NjkzNjk0Lmpw/Zw",
        tip: "Never transfer money to a broker for an IPO. Always use UPI/ASBA mandates."
      }
    ]
  },
  {
    category: "11. Risk Management",
    description: "How to survive in the market without blowing up your account.",
    items: [
      {
        title: "Position Sizing",
        desc: "Deciding how much money to put into ONE trade.",
        analogy: "Eating spicy food. Eat a spoonful, you enjoy. Eat the whole jar, you get sick.",
        imageUrl: "https://imgs.search.brave.com/E-px22LXlBGGS82DfajhRwPOTFo_pGb04A70FlWJ8FQ/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9kaGFu/LmNvL19uZXh0L3N0/YXRpYy9tZWRpYS9z/dGVwdXAuYzkzZjI1/YWEuc3Zn",
        tip: "Never put more than 5-10% of your capital in a single risky stock."
      },
      {
        title: "Risk-Reward Ratio",
        desc: "How much are you risking to earn how much? Aim for 1:2.",
        analogy: "A Bet. If you bet ₹100 to win ₹200, it's good (1:2). If you bet ₹100 to win ₹10, it's stupid.",
        imageUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=500&q=80",
        tip: "Only take trades where you can win at least 2x what you risk."
      }
    ]
  },
  {
    category: "12. Intraday vs Delivery (Trades)",
    description: "Two completely different games. Mixing them is the #1 beginner mistake.",
    items: [
      {
        title: "Intraday Trading",
        desc: "Buy AND sell on the same day. You do NOT own the shares overnight.",
        analogy: "Renting a bike for a day. You must return it before the shop closes.",
        imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&q=80",
        tip: "If you don’t sell by ~3:20 PM, the broker auto-squares your position."
      },
      {
        title: "Delivery (CNC / Long-Term)",
        desc: "You buy shares and they stay in your Demat account until YOU sell.",
        analogy: "Buying a house. You fully own it and can hold for years.",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80",
        tip: "Best for beginners. No leverage. No forced selling."
      },
      {
        title: "Reality Check",
        desc: "Intraday has leverage + pressure. Delivery benefits from compounding.",
        analogy: "T20 vs Test cricket. Same game, different survival rules.",
        imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&q=80",
        tip: "Most retail intraday traders lose money. Long-term investors win."
      }
    ]
  },
  {
    category: "13. How Brokers Work (The Middleman)",
    description: "What actually happens when you click BUY or SELL.",
    items: [
      {
        title: "What is a Stock Broker?",
        desc: "A SEBI-registered intermediary connecting you to NSE/BSE.",
        analogy: "Like Swiggy. You don’t call the restaurant directly.",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
        tip: "You CANNOT trade directly on NSE/BSE without a broker."
      },
      {
        title: "BUY Button Flow",
        desc: "Order → Broker → Exchange → Seller → Clearing → Demat.",
        analogy: "UPI payment passing through banks before reaching the shop.",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80",
        tip: "Execution is instant. Settlement takes T+1 day."
      },
      {
        title: "How Brokers Earn",
        desc: "Brokerage, intraday leverage interest, subscriptions, AMC.",
        analogy: "Low-cost airlines charge for extras.",
        imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&q=80",
        tip: "Zero brokerage usually applies only to delivery, not intraday."
      }
    ]
  },
  {
    category: "14. Where to Start (Beginner Direction)",
    description: "Exactly how a beginner should start safely.",
    items: [
      {
        title: "Where Beginners Should Start",
        desc: "Simple broker + delivery investing + large caps.",
        analogy: "Learning to drive in an empty ground, not a highway.",
        imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80",
        tip: "Start with Nifty 50 stocks or index funds."
      },
      {
        title: "What to Avoid Initially",
        desc: "Options, heavy intraday leverage, Telegram tips.",
        analogy: "Taking steroids before learning to walk.",
        imageUrl: "https://imgs.search.brave.com/wMj9p1InNK6nl-j95MaNvNPhcst0E-i-bSxG6vKERTs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NDc3NDk1MC9waG90/by9xdWVzdGlvbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VndQRVJVMW1XdDR5/YkV2TU93R0g0a2N6/ZWJqdkJSNmRDOE9p/Q1JIZGVmcz0",
        tip: "Guaranteed daily income = guaranteed losses."
      },
      {
        title: "Safe Learning Path",
        desc: "Learn → Paper trade → Small capital → Scale slowly.",
        analogy: "Swimming: shallow water before deep end.",
        imageUrl: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=500&q=80",
        tip: "Goal #1 is survival, not profit."
      }
    ]
  },
  {
    category: "15. Charges & Taxes (The Silent Killers)",
    description: "Profit on chart ≠ Money in bank. Understand where the leakage happens.",
    items: [
      {
        title: "Brokerage & STT",
        desc: "Brokerage is the fee you pay the app. STT (Securities Transaction Tax) is what you pay the Gov.",
        analogy: "Service Charge at a Restaurant. You ordered food for ₹100, but bill is ₹118. The extra is unavoidable.",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80",
        tip: "Delivery brokerage is often free, but STT is higher (0.1%). Intraday STT is lower."
      },
      {
        title: "STCG vs LTCG (Taxes)",
        desc: "Short Term (Sold < 1 year) = 20% Tax. Long Term (Sold > 1 year) = 12.5% Tax (above ₹1.25L profit).",
        analogy: "The Toll Gate. Traders pay a higher toll daily. Investors pay a lower toll if they stay on the highway for >1 year.",
        imageUrl: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=500&q=80",
        tip: "Don't sell just for small profits if it pushes you into the higher tax bracket."
      },
      {
        title: "DP Charges",
        desc: "A fixed fee (approx ₹13-15) charged every time you SELL a delivery stock from your Demat.",
        analogy: "Exit fee at a parking lot. It doesn't matter if you parked for 1 hour or 1 year, you pay to leave.",
        imageUrl: "https://imgs.search.brave.com/-C9oovDHZ2OKfI84EAgszeiCmWg3kSPREGr3i54D0C0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2hhcmUubWFy/a2V0L2ltYWdlcy9i/bG9nLzIwNTYvMTE2/MC9mYWxsYmFja19h/bGxfYXJ0aWNsZXMu/cG5n",
        tip: "Avoid selling small quantities (e.g., 1 share). The DP charge will eat your profit."
      }
    ]
  },
  {
    category: "16. Market Traps (Indian Context)",
    description: "Specific situations in the Indian market that trap beginners.",
    items: [
      {
        title: "Upper & Lower Circuits",
        desc: "If a stock rises/falls too fast (e.g., 5% or 20%), trading is HALTED for the day.",
        analogy: "A Fuse blowing. If voltage (buying/selling) gets too high, the system cuts power to prevent fire.",
        imageUrl: "https://images.unsplash.com/photo-1482275548304-a58859dc31b7?w=500&q=80",
        tip: "Avoid stocks that hit circuits daily ('Operator stocks'). You might get stuck and unable to sell."
      },
      {
        title: "Buy Rumor, Sell News",
        desc: "Stock price rises BEFORE good news, and often FALLS immediately after the news is confirmed.",
        analogy: "Movie hype. The excitement is highest BEFORE release. Once you see it, the hype dies.",
        imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&q=80",
        tip: "Don't buy on the day of good results. The smart money is usually booking profit then."
      },
      {
        title: "Liquidity Trap (Small Caps)",
        desc: "You buy a stock, but when you want to sell, there are ZERO buyers.",
        analogy: "Hotel California. You can check out any time you like, but you can never leave.",
        imageUrl: "https://imgs.search.brave.com/SWDltQH2ksfDNmGTf3KH3hvRM0sR3GqXnCj4YEPneoA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uYXZp/LmNvbS9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEw/L0xpcXVpZGl0eS1U/cmFwLmpwZw",
        tip: "Always check 'Volume'. If daily volume is low (< 50k), do not enter with big money."
      }
    ]
  },
  {
    category: "17. The Passive Route (Mutual Funds)",
    description: "For those who find stock picking too risky or time-consuming.",
    items: [
      {
        title: "What is a Mutual Fund?",
        desc: "You give money to a professional (Fund Manager). They pool money from thousands like you and buy stocks.",
        analogy: "Taking a Bus vs Driving Car. In a Bus (MF), a professional driver drives. You just buy a ticket.",
        imageUrl: "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=500&q=80",
        tip: "90% of beginners are better off starting with Mutual Funds than direct stocks."
      },
      {
        title: "SIP (Systematic Investment Plan)", 
        desc: "Investing a fixed small amount (e.g., ₹500) every month automatically.",
        analogy: "A Gym Membership. You don't get fit in one day. You get fit by going a little bit every day.",
        imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&q=80",
        tip: "Best for students to start. Automation removes emotional decision making."
      },
      {
        title: "Index Funds (Nifty 50)",
        desc: "A fund that simply buys the Top 50 companies. No manager bias. Low fees.",
        analogy: "Ordering a 'Thali'. You get a bit of everything standard, instead of ordering 50 separate dishes.",
        imageUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=500&q=80",
        tip: "This is the safest way to enter the market. 'Nifty BeES' is a popular ETF example."
      }
    ]
  }
];


function HomeBasics() {
  return (
    // 🌙 FIX 1: Main background changed from bg-slate-50 to dark:bg-gray-950
    <div className="py-16 bg-slate-50 dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-blue-600 dark:text-blue-500" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Stock Market <span className="text-blue-600 dark:text-blue-500">Encyclopedia</span>
            </h1>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-gray-400">
            From 'What is a Stock?' to 'RSI Strategies'. The complete handbook.
          </p>
        </div>

        {/* STORY / HOOK BLOCK */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden mb-20 border border-slate-200 dark:border-gray-800">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-8 h-8" /> The Ecosystem 🌏
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                {introStory.content}
              </p>
            </div>
            
            {/* Right side of Story Block */}
            <div className="md:w-1/2 p-8 md:p-12 bg-white dark:bg-gray-900 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 rounded-full text-xs font-bold w-fit mb-4">
                <AlertCircle className="w-3 h-3 inline mr-1" />
                MYTH BUSTER
              </div>
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                {introStory.mythBuster.title}
              </h4>
              <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {introStory.mythBuster.answer} {introStory.mythBuster.explanation}
              </p>
            </div>
          </div>
        </div>

        {/* =======================
            KNOWLEDGE SECTIONS 
            ======================= */}
        {stockKnowledge.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-24 last:mb-0">
            
            {/* Section Heading - Sticky */}
            {/* 🌙 FIX 2: Sticky header updated to handle dark background transparency */}
            <div className="mb-10 pl-4 border-l-8 border-blue-600 sticky top-0 bg-slate-50/90 dark:bg-gray-950/90 py-4 z-10 shadow-sm backdrop-blur-md">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                {section.category}
              </h3>
              <p className="text-slate-500 dark:text-gray-400 mt-2 text-lg">
                {section.description}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-10 lg:grid-cols-2"> 
              {section.items.map((item, i) => (
                <div 
                  key={i} 
                  className="group bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-2xl dark:shadow-black/50 transition-all duration-300 border border-slate-100 dark:border-gray-800 overflow-hidden flex flex-col sm:flex-row h-full transform hover:-translate-y-1"
                >
                  
                  {/* IMAGE SIDE */}
                  <div className="sm:w-2/5 relative overflow-hidden bg-slate-200 dark:bg-gray-800 h-56 sm:h-auto min-h-[200px]">
                      <img 
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 dark:opacity-80"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:bg-gradient-to-r opacity-60"></div>
                  </div>

                  {/* CONTENT SIDE */}
                  <div className="p-6 sm:w-3/5 flex flex-col">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-slate-600 dark:text-gray-400 mb-4 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>

                    {/* Analogy Box - 🌙 FIX 3: Dark Amber for analogy */}
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/50 p-3 rounded-lg mb-4 relative mt-auto">
                        <span className="absolute -top-3 left-3 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                          CONCEPT
                        </span>
                        <p className="text-sm text-slate-700 dark:text-gray-300 mt-1 italic">
                          "{item.analogy}"
                        </p>
                    </div>

                    {/* Footer / Tip */}
                    <div className="pt-4 border-t border-slate-100 dark:border-gray-800">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 text-lg">💡</span>
                        <p className="text-xs text-slate-500 dark:text-gray-500 font-medium leading-tight pt-1">
                          <span className="text-slate-900 dark:text-gray-300 font-bold">Rule of Thumb: </span>
                          {item.tip}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}

        {/* =======================
            FINAL DIRECTION
            ======================= */}
        <div className="mt-24 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-transparent dark:border-gray-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <h3 className="text-3xl font-bold mb-8 relative z-10">Your First 30 Days in the Market 🗓️</h3>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <ul className="space-y-4 text-slate-200 text-base">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Open Demat + Trading account</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Start with Delivery only (no intraday, no options)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Track Nifty 50 daily to learn volatility</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Learn fundamentals before indicators</span>
              </li>
              <li className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                <span>Avoid tips, calls, and guaranteed-return schemes</span>
              </li>
            </ul>

            <div className="flex flex-col justify-center">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 text-sm leading-relaxed mb-6 backdrop-blur-sm">
                <p className="mb-3 text-slate-300">
                  <strong>Rule 1:</strong> Protect capital. Better to make ₹0 than lose ₹1000.
                </p>
                <p className="text-slate-300">
                  <strong>Rule 2:</strong> Compounding works only if Rule 1 survives.
                </p>
              </div>
              
              <Link 
                to="/brokers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-xl transition-all hover:-translate-y-1 shadow-lg hover:shadow-blue-500/50 w-full md:w-auto"
              >
                Compare Brokers Now <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* DISCLAIMER FOOTER */}
        <div className="mt-16 text-center text-slate-400 dark:text-gray-500 text-xs px-4">
          <p className="flex items-center justify-center gap-1 mb-1">
            <ShieldAlert className="w-3 h-3" />
            Disclaimer: Educational purpose only. Not financial advice.
          </p>
          <p>Markets involve risk. Past performance does not guarantee future returns. Consult a financial advisor before investing.</p>
          <p className="mt-4 opacity-50">© {new Date().getFullYear()} StockSimple. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}

export default HomeBasics;