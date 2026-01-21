/**
 * Router Configuration
 * 
 * INTERVIEW CONCEPTS:
 * - React Router v7: Modern data router pattern
 * - createBrowserRouter: Declarative routing with data loading support
 * - Layout Routes: Shared UI (Header, Navbar, Footer) across all pages
 * - Nested Routes: Child routes render inside parent's <Outlet>
 * - Index Route: Default route when path matches exactly "/"
 * - Catch-all Route: "*" matches any unmatched path (404 handling)
 * 
 * WHY THIS ARCHITECTURE?
 * - Separates routing logic from components (cleaner code)
 * - Layout pattern prevents code duplication
 * - Easy to add loaders/actions later (React Router data features)
 * - Type-safe routing with TypeScript (if migrated)
 */

import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

// Page Components
import Layout from "../layout/layout"
import Home from "../pages/Home"
import News from "../pages/News"
import IPOs from "../pages/IPOs"
import Brokers from "../pages/Broker";
import NotFound from "../pages/NotFound"
import GlobalImpact from "../pages/GlobalImpact"

/**
 * createBrowserRouter: Modern React Router pattern (v6.4+)
 * - Uses browser history API (clean URLs, no #)
 * - Supports data loading (loaders) and mutations (actions)
 * - Better for SEO than HashRouter
 * 
 * createRoutesFromElements: JSX-based route definition
 * - More readable than route objects
 * - Type-safe with TypeScript
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    /**
     * LAYOUT ROUTE (Parent Route)
     * - path="/" means this is the root route
     * - element={<Layout />} renders Layout component for all child routes
     * - All child routes will render inside Layout's <Outlet />
     * 
     * INTERVIEW Q: What is an Outlet?
     * A: Outlet is where child routes render. Layout wraps all pages.
     */
    <Route path="/" element={<Layout />}>
      
      {/* 
        INDEX ROUTE (Default Route)
        - "index" means this renders when path is exactly "/"
        - No path prop needed - it's the default child route
        - INTERVIEW Q: What's the difference between index and path="/"?
        * A: index is relative to parent, path="/" is absolute
      */}
      <Route index element={<Home />} />
      
      {/* 
        NESTED ROUTES
        - These are relative to parent route "/"
        - "/brokers" = full path
        - Each route renders its component inside Layout's Outlet
      */}
      <Route path="brokers" element={<Brokers />} />
      <Route path="news" element={<News />} />
      <Route path="ipos" element={<IPOs />} />
      <Route path="global-impact" element={<GlobalImpact />} />
      
      {/* 
        CATCH-ALL ROUTE (404 Handler)
        - path="*" matches any unmatched URL
        - Must be last route (React Router matches in order)
        - INTERVIEW Q: How does React Router match routes?
        * A: Matches from top to bottom, first match wins
      */}
      <Route path="*" element={<NotFound />} />

    </Route>
  )
)

export default router
/**
 📁 router/ — NAVIGATION LOGIC (MODERN REACT ROUTER)
Purpose

Defines how URLs map to pages.

In modern React Router (v6.4+):

Routes are data

UI is rendered from route definitions

Your router decides:

Which page loads for which path

Which layout wraps which pages

What happens on invalid URLs (404)

Why router has its own folder

Keeps App logic clean

Makes routing readable

Supports loaders & actions later

Interview line:

“I use React Router’s data router with layout routes for scalable navigation.”
 */