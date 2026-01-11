import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchBar from "../components/searchbar";
import Footer from "../components/footer";

function Layout() {
  const [stock, setStock] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      
      {/* Fixed headers at the top */}
      <div className="w-full">
        <Header />
        <SearchBar setStock={setStock} />
        <Navbar />
      </div>

      {/* Main Content Area: Responsive padding */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <Outlet context={{ stock }} />
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;