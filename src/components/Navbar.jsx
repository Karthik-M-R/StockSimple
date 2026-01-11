import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react if not already present
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const base = "px-3 py-2 text-sm font-medium transition rounded-md";

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
          <div className="flex-shrink-0 md:hidden font-bold text-blue-600 dark:text-blue-400">
            StockSimple
          </div>

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
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links (Dropdown) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)} // Close menu on click
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