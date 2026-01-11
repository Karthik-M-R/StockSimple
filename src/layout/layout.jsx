import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchBar from "../components/searchbar";
import Footer from "../components/footer";

function Layout() {
  const [stock, setStock] = useState("");

  return (
    // 👇 FIX: Added dark:bg-gray-950 and dark:text-white
    <div className="min-h-screen bg-slate-100 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      
      <Header />
      <SearchBar setStock={setStock} />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <Outlet context={{ stock }} />
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;


   /** 
        The context prop creates a permanent "Inbox" on that desk.

Layout says: "I don't care who is sitting there today. I am putting this file (stock data) in the inbox (context)."

Home says: "I am sitting at the desk today. Let me check the inbox (useOutletContext) to see if the Manager left anything."

 */

/**
 
📁 layout/ — APPLICATION SKELETON (VERY IMPORTANT)
Purpose

Defines what stays constant while pages change.

In your app:

Header stays

Search stays

Navbar stays

Footer stays

Only middle content changes

This is why Layout.jsx exists.

Layout.jsx does ONE critical thing:
<Outlet />

What <Outlet /> means

“Render the currently matched page here”

Why this is powerful

No repeated code

No header/footer duplication

Clean separation of global vs page UI

Professional insight:
Layouts are how real apps scale (Dashboards, Admin panels, SaaS).
 */