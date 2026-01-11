export const brokerData = [
  {
    id: 1,
    name: "Zerodha",
    logo: "https://zerodha.com/static/images/logo.svg",
    type: "Discount Broker",
    badge: "👑 Industry Leader",
    badgeColor: "bg-blue-100 text-blue-800",
    charges: {
      accountOpening: "₹0 (Free)*", // ✅ FIXED: Now Free
      maintenance: "₹300/year",
      delivery: "₹0 (Free)",
      intraday: "₹20 or 0.03%"
    },
    pros: [
      "Cleanest & Fastest UI (Kite)",
      "Zero Spam Calls / Tips",
      "Best Educational Content (Varsity)",
      "Nudge Feature to stop bad trades"
    ],
    cons: [
      "Demat AMC ₹300/year", // ✅ FIXED: More accurate con
      "No Advisory/Tips provided",
      "Occasional tech glitches"
    ],
    suitableFor: "Serious Investors & Traders",
    recommendation: "Choose this if you want a no-nonsense, professional trading experience and hate spam calls.",
    link: "https://zerodha.com/open-account",
    footnote: "*Free for all resident Indians (was ₹200 earlier)"
  },
  {
    id: 2,
    name: "Groww",
    logo: "https://groww.in/groww-logo-270.png",
    type: "Discount Broker",
    badge: "❤️ Best for Beginners",
    badgeColor: "bg-emerald-100 text-emerald-800",
    charges: {
      accountOpening: "₹0 (Free)",
      maintenance: "₹0 (Lifetime Free)",
      delivery: "₹20 or 0.05%",
      intraday: "₹20 or 0.05%"
    },
    pros: [
      "Super simple, clutter-free UI",
      "Paperless, instant Account Opening",
      "Direct Mutual Funds integration",
      "Zero AMC (Annual Fees)"
    ],
    cons: [
      "Limited features for Pro Traders",
      "Charts are basic vs TradingView",
      "Customer support can be slow"
    ],
    suitableFor: "GenZ, Beginners & MF Investors",
    recommendation: "Choose this if you are opening your first account and find charts/numbers scary.",
    link: "https://app.groww.in/v3cO/8dxtpv2b"
  },
  {
    id: 3,
    name: "Angel One",
    logo: "https://imgs.search.brave.com/fwMFQ2W6U9_UM4ajOLebRZTRMnVodkXOeX2Rx1gXZp8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmdo/ZHByby5jb20vd3At/Y29udGVudC90aGVt/ZXMvcG5naGRwcm8v/ZG93bmxvYWQvc29j/aWFsLW1lZGlhLWFu/ZC1icmFuZHMvYW5n/ZWwtb25lLWxvZ28u/cG5n",
    type: "Full Service (Hybrid)",
    badge: "🤖 Best Technology",
    badgeColor: "bg-orange-100 text-orange-800",
    charges: {
      accountOpening: "₹0 (Free)",
      maintenance: "₹240/year",
      delivery: "₹0 (Free)",
      intraday: "₹20 or 0.03%"
    },
    pros: [
      "Free Advisory & Stock Tips",
      "SmartAPI for algo trading (Free)",
      "Margin Trading Facility (MTF)",
      "Good for non-English speakers"
    ],
    cons: [
      "App UI feels a bit cluttered",
      "Sales calls/notifications can be annoying",
      "Hidden charges in MTF"
    ],
    suitableFor: "People who want guidance/tips",
    recommendation: "Choose this if you want 'Stock Tips' inside the app and need high leverage (margin).",
    link: "https://www.angelone.in/"
  },
  {
    id: 4,
    name: "Upstox",
    logo: "https://imgs.search.brave.com/UEzTxA9g-ZfC5x-cwF0dadsTCEyq0mxO6LnEZJZKCdc/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9leGNo/YW5nZTRtZWRpYS5n/dW1sZXQuaW8vcGhv/dG9zL1Vwc3RveC1s/b2dvLmpwZz9mb3Jt/YXQ9d2VicCZ3PTc2/OCZkcHI9MS4z",
    type: "Discount Broker",
    badge: "🚀 Trader's Choice",
    badgeColor: "bg-purple-100 text-purple-800",
    charges: {
      accountOpening: "₹0 (Free)",
      maintenance: "₹150/year (Waived often)",
      delivery: "₹20 or 2.5%",
      intraday: "₹20 or 0.05%"
    },
    pros: [
      "Very fast mobile app",
      "Good charting tools (TradingView)",
      "Backed by Ratan Tata (Trust)",
      "Option Chain analysis is excellent"
    ],
    cons: [
      "Delivery is NOT free (₹20 charge)",
      "Customer service is average",
      "UI changes frequently"
    ],
    suitableFor: "Active Day Traders (F&O)",
    recommendation: "Choose this if you trade Options/Futures and need a fast, reliable mobile app.",
    link: "https://upstox.com/"
  },
  {
    id: 5,
    name: "Dhan",
    logo: "https://imgs.search.brave.com/uo5gvYlBmZHMlCGvary6RrvK6ljmetRN7jaoX-6jurc/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pLnRy/YWN4bi5jb20vbG9n/by9jb21wYW55L2Ro/YW4uY29fTG9nb183/ZTRmOWIyNi0zOTk4/LTQwOWQtOWMzNi03/NzA3OWU3YTdjZDUu/anBnP2Zvcm1hdD13/ZWJwJmhlaWdodD0x/MjAmd2lkdGg9MTIw",
    type: "Discount Broker",
    badge: "⚡ Best for Charting",
    badgeColor: "bg-indigo-100 text-indigo-800",
    charges: {
      accountOpening: "₹0 (Free)",
      maintenance: "₹0 (Lifetime Free)",
      delivery: "₹0 (Free)",
      intraday: "₹20 or 0.03%"
    },
    pros: [
      "Deep integration with TradingView",
      "Instant Payouts (Fastest withdrawal)",
      "Dedicated Option Trader App",
      "Free Account & AMC"
    ],
    cons: [
      "Newer player (Less track record)",
      "UI can be overwhelming",
      "Web platform uses high RAM"
    ],
    suitableFor: "Chartists & heavy Technical Analysts",
    recommendation: "Choose this if you love reading charts and want TradingView Premium features for free.",
    link: "https://dhan.co/"
  },
  {
    id: 6,
    name: "Kotak Neo",
    logo: "https://imgs.search.brave.com/fE_UMvhnYIa6MSmT1EyLrZP_vnsCPcrytr0Mlbse6wY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hdmF0/YXJzLmdpdGh1YnVz/ZXJjb250ZW50LmNv/bS91LzEzMTY0Mzg1/ND92PTQ",
    type: "Discount Broker",
    badge: "💸 Zero Brokerage",
    badgeColor: "bg-red-100 text-red-800",
    charges: {
      accountOpening: "₹0 (Free)",
      maintenance: "₹50/mo (Trade Free)",
      delivery: "₹0 (Free)",
      intraday: "₹0 (Free for Youth)"
    },
    pros: [
      "Brokerage Free Intraday trades",
      "Backed by Kotak Bank (Safety)",
      "Good research reports",
      "Margin against shares is easy"
    ],
    cons: [
      "App is still buggy vs Zerodha",
      "Legacy system issues",
      "Zero brokerage plan has T&C"
    ],
    suitableFor: "Traders under 30 (Youth)",
    recommendation: "Choose this if you are under 30 and want to save thousands in brokerage fees.",
    link: "https://www.kotaksecurities.com/"
  },
  {
    id: 7,
    name: "ICICI Direct",
    logo: "https://imgs.search.brave.com/3PmOjeFhxoRXUNrXQ1wxD8tr-qTG7kVOKQKt-dbgZcw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzYvMi9pY2ljaS1s/b2dvLXBuZ19zZWVr/bG9nby02OTU0OS5w/bmc",
    type: "Full Service",
    badge: "🏦 Bank Trust",
    badgeColor: "bg-orange-50 text-orange-700",
    charges: {
      accountOpening: "₹0 (Free)",
      maintenance: "₹700/year (High)",
      delivery: "0.55% (High)",
      intraday: "0.27%"
    },
    pros: [
      "3-in-1 Account (Bank+Demat+Trade)",
      "Instant fund transfer",
      "Relationship Manager provided",
      "IPO application is seamless"
    ],
    cons: [
      "Very expensive brokerage",
      "Hidden charges",
      "Old-school interface"
    ],
    suitableFor: "Conservative/Retired Investors",
    recommendation: "Choose this if you don't trust apps and want your demat linked directly to your bank account.",
    link: "https://www.icicidirect.com/"
  },
  {
    id: 8,
    name: "Paytm Money",
    logo: "https://imgs.search.brave.com/bZUn6QglcfR0n--M0xpLEFTprWrE7J4utiN15DiWHxg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2Z1bGwvNzIt/NzI4NTk0X3BheXRt/LW1vbmV5LWxvZ28t/cGF5dG0tbW9uZXkt/bXV0dWFsLWZ1bmRz/LnBuZw",
    type: "Discount Broker",
    badge: "📱 Mobile First",
    badgeColor: "bg-cyan-100 text-cyan-900",
    charges: {
      accountOpening: "₹0 (Free)",
      maintenance: "₹0 (Limited time)",
      delivery: "₹15 or 2.5%",
      intraday: "₹15 or 0.05%"
    },
    pros: [
      "Cheapest brokerage (₹15 vs ₹20)",
      "Integrated with Paytm ecosystem",
      "Good Voice Trading feature",
      "Simple SIP management"
    ],
    cons: [
      "Features are very basic",
      "Web platform is not great",
      "Support via tickets only"
    ],
    suitableFor: "Casual Paytm Users",
    recommendation: "Choose this if you already use Paytm for everything and just want to buy a few stocks occasionally.",
    link: "https://www.paytmmoney.com/"
  }
];