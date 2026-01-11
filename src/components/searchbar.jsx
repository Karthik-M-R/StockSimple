
import React, { useState } from "react";


function SearchBar({ setStock }) {
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    const cleaned = value
      .toUpperCase()
      .replace(/\s+/g, "")
      .replace(".NS", "");

    setStock(cleaned);
  };

  return (
    <form onSubmit={handleSearch} className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Stocks On Your Mind...! (RELIANCE, TCS, INFY)"
          className="flex-1 border rounded-xl px-5 py-4 text-lg"
        />
        <button className="px-6 py-4 bg-black text-white rounded-xl">
         Stock
        </button>
      </div>
    </form>
  );
}

export default SearchBar;

