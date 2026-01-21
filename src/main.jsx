/**
 * Main Entry Point
 * 
 * INTERVIEW CONCEPTS:
 * - React 18+ createRoot API (replaces ReactDOM.render)
 * - StrictMode: Development tool for catching bugs
 * - RouterProvider: Connects router config to React app
 * - CSS Imports: Global styles loaded before component tree
 * 
 * WHY createRoot instead of render?
 * - Enables React 18 features (Concurrent Rendering, Suspense)
 * - Better performance and user experience
 * - Required for React 19
 */

import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import router from "./router/router" 
import "./index.css"
import "./App.css"

/**
 * ReactDOM.createRoot()
 * - React 18+ API for rendering React apps
 * - Returns a root object that can render components
 * - INTERVIEW Q: What's the difference between createRoot and render?
 * A: createRoot enables concurrent features, render is legacy (React 17)
 * 
 * getElementById("root")
 * - Finds the DOM element in index.html where React will mount
 * - This is the "root" of our React application tree
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  /**
   * React.StrictMode
   * - Development-only wrapper that helps catch bugs
   * - Double-invokes effects, functions to find side effects
   * - Warns about deprecated APIs
   * - INTERVIEW Q: Does StrictMode run in production?
   * A: No, it's stripped out in production builds
   */
  <React.StrictMode>
    {/* 
      RouterProvider
      - Connects our router configuration to the React component tree
      - Makes routing context available to all components via hooks
      - INTERVIEW Q: What hooks can you use with React Router?
      * A: useNavigate, useParams, useLocation, useOutletContext, etc.
    */}
    <RouterProvider router={router} />
  </React.StrictMode>
)