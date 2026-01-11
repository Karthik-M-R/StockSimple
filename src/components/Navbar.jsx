import React from 'react';
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // 👈 Import it

function Navbar() {
  const base = "px-3 py-2 text-sm font-medium transition rounded-md";

  return (
    // Add dark:bg-gray-900 to the nav container
    <nav className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex gap-8 h-16 items-center justify-between">
        
        {/* Navigation Links */}
        <div className="flex gap-4">
          {[
            { to: "/", label: "Home" },
            { to: "/brokers", label: "Broker Comparison" },
            { to: "/news", label: "News" },
            { to: "/ipos", label: "IPOs" },
            { to: "/global-impact", label: "Global Impact" },
          ].map((item) => (
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

        {/* 👈 Add the Toggle Button Here */}
        <ThemeToggle />
        
      </div>
    </nav>
  );
}

export default Navbar;