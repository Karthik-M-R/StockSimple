/**
 * Navbar Component
 * 
 * INTERVIEW CONCEPTS:
 * - Responsive Design: Mobile menu toggle
 * - Conditional Rendering: Showing/hiding mobile menu
 * - NavLink: Active route highlighting
 * - State Management: Mobile menu open/close state
 * - Event Handlers: onClick for menu toggle
 * - CSS Classes: Dynamic class names based on state
 * - Accessibility: Screen reader support (sr-only)
 * 
 * WHY MOBILE MENU?
 * - Hamburger menu for small screens
 * - Full menu for desktop
 * - Common responsive pattern
 */

import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react if not already present
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  /**
   * STATE: Mobile Menu Toggle
   * 
   * isOpen: Boolean state for mobile menu visibility
   * - false: Menu closed (default)
   * - true: Menu open
   * 
   * INTERVIEW Q: Why useState instead of CSS :hover?
   * A: Need JavaScript control for click-to-close, better UX
   */
  const [isOpen, setIsOpen] = useState(false);
  
  /**
   * BASE STYLES
   * - Reusable className string
   * - Applied to all nav links
   * - DRY principle (Don't Repeat Yourself)
   */
  const base = "px-3 py-2 text-sm font-medium transition rounded-md";

  /**
   * NAVIGATION LINKS ARRAY
   * - Centralized link configuration
   * - Easy to add/remove routes
   * - Maps to NavLink components
   * 
   * INTERVIEW Q: Why array instead of hardcoding?
   * A: Easier maintenance, can be generated dynamically, single source of truth
   */
  const links = [
    { to: "/", label: "Home" },
    { to: "/brokers", label: "Broker Comparison" },
    { to: "/news", label: "News" },
    { to: "/ipos", label: "IPOs" },
    { to: "/global-impact", label: "Global Impact" },
  ];

  return (
    <nav className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo/Brand for Mobile */}
{/* Logo/Brand */}
          <NavLink to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo.png" alt="StockSimple Logo" className="h-8 w-8 object-contain" />
            <span className="font-bold text-blue-600 dark:text-blue-400 text-lg md:text-xl">
              StockSimple
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-4">
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${base} ${
                    isActive
                      ? "text-blue-600 font-bold dark:text-blue-400"
                      : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* 
            MOBILE MENU BUTTON
            - Only visible on mobile (md:hidden)
            - Toggles isOpen state
            - Shows X icon when open, Menu icon when closed
            - 
            ACCESSIBILITY:
            - sr-only: Screen reader only text (hidden visually)
            - INTERVIEW Q: What is sr-only?
            * A: CSS class that hides element visually but keeps it for screen readers
          */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition"
              >
                <span className="sr-only">Open main menu</span>
                {/* 
                  CONDITIONAL ICON RENDERING
                  - Ternary operator: Show X if open, Menu if closed
                  - Visual feedback for current state
                */}
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 
        MOBILE NAVIGATION LINKS (Dropdown)
        - Conditional visibility: block when open, hidden when closed
        - md:hidden: Only visible on mobile (hidden on desktop)
        - 
        INTERVIEW Q: Why template literal for className?
        * A: Dynamic class based on isOpen state (conditional styling)
        * 
        CLOSE ON CLICK:
        - onClick={() => setIsOpen(false)} closes menu when link clicked
        - Better UX: Menu doesn't stay open after navigation
      */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* 
            MAP OVER LINKS ARRAY
            - Creates NavLink for each route
            - key prop: Required for list items (React optimization)
            - 
            INTERVIEW Q: Why key prop?
            * A: Helps React identify which items changed (performance optimization)
          */}
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)} // Close menu on click
              /**
               * NavLink className FUNCTION
               * 
               * isActive: Boolean provided by NavLink
               * - true: Current route matches this link
               * - false: Route doesn't match
               * 
               * INTERVIEW Q: What's the difference between NavLink and Link?
               * A: NavLink provides isActive prop for styling active routes
               */
              className={({ isActive }) =>
                `block ${base} ${
                  isActive
                    ? "bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400"
                    : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;