/**
 * Layout Component
 * 
 * INTERVIEW CONCEPTS:
 * - Layout Route Pattern: Shared UI across multiple pages
 * - Outlet: Renders child routes (from router config)
 * - Context API: Passing data from Layout to child routes
 * - useState: Managing stock search state
 * - Props Drilling Solution: Using context instead of passing props through multiple levels
 * 
 * WHY LAYOUT COMPONENT?
 * - Prevents code duplication (Header/Navbar/Footer on every page)
 * - Centralized state management for shared features
 * - Consistent UI structure across app
 */

import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchBar from "../components/searchbar";
import Footer from "../components/footer";

function Layout() {
  /**
   * STATE MANAGEMENT
   * 
   * useState Hook:
   * - Manages stock search query state
   * - Lifted to Layout so it can be shared with Home page
   * - INTERVIEW Q: Why not put this in Home component?
   * A: SearchBar is in Layout, but result is shown in Home. Need shared state.
   * 
   * INTERVIEW Q: When would you use Context API instead?
   * A: When state needs to be shared across many components or deeply nested
   */
  const [stock, setStock] = useState("");

  return (
    /**
     * FLEXBOX LAYOUT
     * - min-h-screen: Ensures layout fills viewport height
     * - flex flex-col: Vertical flex container
     * - flex-grow on main: Pushes footer to bottom
     * 
     * DARK MODE:
     * - dark: classes from Tailwind CSS
     * - transition-colors: Smooth theme switching
     */
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      
      {/* 
        FIXED HEADER SECTION
        - Contains Header, SearchBar, and Navbar
        - These stay consistent across all pages
        - w-full: Full width container
      */}
      <div className="w-full">
        <Header />
        {/* 
          SearchBar receives setStock function
          - When user searches, it updates Layout's state
          - This state is then passed to child routes via context
        */}
        <SearchBar setStock={setStock} />
        <Navbar />
      </div>

      {/* 
        MAIN CONTENT AREA
        - flex-grow: Takes remaining vertical space
        - max-w-7xl: Limits width for readability (responsive design)
        - mx-auto: Centers content horizontally
        - Responsive padding: px-4 on mobile, px-6 on tablet, px-8 on desktop
      */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* 
          Outlet Component
          - Renders the matched child route component (Home, News, IPOs, etc.)
          - This is where page-specific content appears
          - 
          CONTEXT PROP:
          - context={{ stock }} passes stock state to child routes
          - Child routes can access via useOutletContext() hook
          - INTERVIEW Q: What's the difference between context prop and Context API?
          * A: context prop is route-specific, Context API is app-wide
        */}
        <Outlet context={{ stock }} />
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;