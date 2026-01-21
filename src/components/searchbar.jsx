/**
 * SearchBar Component
 * 
 * INTERVIEW CONCEPTS:
 * - Controlled Component: Input value controlled by React state
 * - Form Handling: onSubmit prevents default form submission
 * - Input Sanitization: Cleaning user input before processing
 * - Lifting State Up: Calling parent's setStock function (inverse data flow)
 * - Event Handling: onChange for real-time input, onSubmit for search
 * 
 * WHY CONTROLLED COMPONENT?
 * - React controls the input value via state
 * - Allows validation, formatting, and controlled updates
 * - INTERVIEW Q: What's the difference between controlled and uncontrolled?
 * * A: Controlled uses state, uncontrolled uses refs/DOM directly
 */

import React, { useState } from "react";

function SearchBar({ setStock }) {
  /**
   * LOCAL STATE
   * - Manages input field value
   * - Separate from parent's stock state
   * - INTERVIEW Q: Why not use parent's stock state directly?
   * A: Need intermediate state for input (user might be typing)
   */
  const [value, setValue] = useState("");

  /**
   * handleSearch Function
   * - Called when form is submitted (Enter key or button click)
   * - INTERVIEW Q: What does e.preventDefault() do?
   * A: Prevents default form submission (page reload)
   * 
   * INPUT SANITIZATION:
   * - trim(): Removes leading/trailing whitespace
   * - toUpperCase(): Converts to uppercase (API requirement)
   * - replace(/\s+/g, ""): Removes all spaces
   * - replace(".NS", ""): Removes .NS suffix if user added it
   * 
   * Example: "  tata motors  " -> "TATAMOTORS"
   */
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    
    // VALIDATION: Early return if input is empty
    // trim() ensures spaces don't count as valid input
    if (!value.trim()) return;

    // INPUT CLEANING
    // Chain of transformations to normalize stock symbol
    const cleaned = value
      .toUpperCase()           // "tata" -> "TATA"
      .replace(/\s+/g, "")      // "TATA MOTORS" -> "TATAMOTORS"
      .replace(".NS", "");      // "TATAMOTORS.NS" -> "TATAMOTORS"

    // LIFTING STATE UP
    // Call parent's setStock function to update Layout's state
    // This triggers re-render in Home component via context
    setStock(cleaned);
  };

  return (
    /**
     * FORM ELEMENT
     * - onSubmit: Triggers handleSearch when form is submitted
     * - INTERVIEW Q: Why use form instead of just button onClick?
     * A: Form allows Enter key submission, better accessibility
     */
    <form onSubmit={handleSearch} className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-4">
        {/* 
          CONTROLLED INPUT
          - value: Controlled by React state (value)
          - onChange: Updates state on every keystroke
          - INTERVIEW Q: What happens if you don't provide onChange?
          * A: Input becomes read-only (can't type)
          * 
          TWO-WAY DATA BINDING:
          - State -> Input (value prop)
          - Input -> State (onChange handler)
        */}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Stocks On Your Mind...! (RELIANCE, TCS, INFY)"
          className="flex-1 border rounded-xl px-5 py-4 text-lg"
        />
        {/* 
          SUBMIT BUTTON
          - type="submit" (default for button in form)
          - Clicking this triggers form's onSubmit handler
          - INTERVIEW Q: What's the difference between button and input type="submit"?
          * A: button is more flexible (can contain other elements), input is simpler
        */}
        <button className="px-6 py-4 bg-black text-white rounded-xl">
         Stock
        </button>
      </div>
    </form>
  );
}

export default SearchBar;

