/**
 * ThemeToggle Component
 * 
 * INTERVIEW CONCEPTS:
 * - localStorage: Browser storage for persisting theme preference
 * - DOM Manipulation: Directly modifying HTML class (for Tailwind dark mode)
 * - useEffect: Side effect to sync theme with DOM and localStorage
 * - Conditional Rendering: Showing different icons based on theme
 * - State Initialization: Reading from localStorage on mount
 * 
 * WHY THIS PATTERN?
 * - Tailwind dark mode works by adding "dark" class to <html>
 * - localStorage persists theme across page reloads
 * - useEffect ensures DOM stays in sync with state
 */

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  /**
   * STATE INITIALIZATION
   * 
   * useState with Initializer Function:
   * - localStorage.getItem("theme") reads from browser storage
   * - "light" is fallback if no theme is stored (first visit)
   * - INTERVIEW Q: Why read from localStorage in useState?
   * A: To initialize state with persisted value on component mount
   * 
   * INTERVIEW Q: What if localStorage.getItem returns null?
   * A: || operator provides fallback "light"
   */
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  /**
   * useEffect Hook - Theme Synchronization
   * 
   * DEPENDENCY: [theme]
   * - Runs whenever theme state changes
   * - Also runs once on mount (initial sync)
   * 
   * SIDE EFFECTS:
   * 1. DOM Manipulation: Adds/removes "dark" class on <html>
   * 2. localStorage: Saves theme preference
   * 
   * INTERVIEW Q: Why manipulate DOM directly instead of React state?
   * A: Tailwind's dark mode requires class on <html> element, not React component
   * 
   * INTERVIEW Q: Is direct DOM manipulation okay in React?
   * A: Yes, for cases like this where you need to modify document root
   *    (similar to how libraries like react-helmet work)
   */
  useEffect(() => {
    // Get reference to <html> element (document root)
    const root = window.document.documentElement;
    
    // CONDITIONAL CLASS MANIPULATION
    // Tailwind's dark mode works by checking for "dark" class on parent
    // Adding/removing class triggers dark: variant styles
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    // PERSISTENCE
    // Save theme to localStorage so it persists across page reloads
    // INTERVIEW Q: What's the difference between localStorage and sessionStorage?
    // A: localStorage persists until cleared, sessionStorage clears on tab close
    localStorage.setItem("theme", theme);
  }, [theme]); // Dependency: Re-run when theme changes

  /**
   * TOGGLE HANDLER
   * 
   * Ternary Operator:
   * - If dark, switch to light
   * - If light, switch to dark
   * 
   * INTERVIEW Q: Why not use if-else?
   * A: Ternary is more concise for simple conditionals
   */
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {/* 
        CONDITIONAL ICON RENDERING
        - Shows Sun icon when dark mode (to indicate clicking will lighten)
        - Shows Moon icon when light mode (to indicate clicking will darken)
        - INTERVIEW Q: Why conditional rendering here?
        * A: Visual feedback - icon represents current state, not action
      */}
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
};

export default ThemeToggle;